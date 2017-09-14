using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Core.EF;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Services.Interfaces;

namespace Services.Services
{
    public class PersonRepository : Interfaces.IPersonRepository
    {
        private PersonDbContext personContext;
        private IJsonLoader loader;

        public PersonRepository(IJsonLoader loader, PersonDbContext personContext)
        {
            if (loader == null)
            {
                throw new ArgumentNullException(nameof(loader));
            }
            if (personContext == null)
            {
                throw new ArgumentNullException(nameof(personContext));
            }
            this.personContext = personContext;
            this.loader = loader;
        }
        public void AddPerson(Person person)
        {
            this.personContext.Add(person);
            this.personContext.SaveChanges();
        }

        public void DeletePerson(Person person)
        {
            this.personContext.Remove(person);
            this.personContext.SaveChanges();
        }
        public void DeletePersonByEmail(string email)
        {
            this.personContext.Remove(this.personContext.People.SingleOrDefault(x => x.Email == email));
            this.personContext.SaveChanges();
        }

        public void DeletePersonById(string id)
        {
            this.personContext.Remove(this.personContext.People.SingleOrDefault(x => x.id == id));
            this.personContext.SaveChanges();
        }

        public Person GetPersonByEmail(string email)
        {
            return this.personContext.People.SingleOrDefault(x => x.Email == email);
        }

        public Person GetPersonById(string id)
        {
            return this.personContext.People.SingleOrDefault(x => x.id == id);
        }

        public IEnumerable<Person> GetPeople()
        {
            return personContext.People.Include(x => x.accessibilities).Include(z => z.Addresses).Include(z => z.roles).ToList();
        }

        public IEnumerable<Person> GetPeopleByLastName(string LastName)
        {
            return this.personContext.People.Where(x => x.LastName == LastName);
        }

        public IEnumerable<Person> GetPeopleByName(string Name)
        {
            return this.personContext.People.Where(x => x.Name == Name);
        }

        public void DeletePersonAt(int id)
        {
            this.personContext.People.Remove(this.personContext.People.ElementAt(id));
        }

        public void AddPeopleToMemDb()
        {
            IEnumerable<Person> people;
            using (StreamReader file = new StreamReader(loader.GetJsonSource()))
            {
                people = Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Person>>(file.ReadToEnd());
            }
            personContext.People.AddRange(people);
            personContext.SaveChanges();
        }

        public void AddPeopleToJson()
        {
            using (StreamWriter file = new StreamWriter(loader.GetJsonSource()))
            {
                Newtonsoft.Json.JsonConvert.SerializeObject(personContext.People);
            }
        }
    }
}