using System;
using System.Collections.Generic;
using Core.Models;

namespace Services.Interfaces
{
    public interface IPersonRepository
    {
        IEnumerable<Person> GetPeople();
        Person GetPersonById(string id);
        Person GetPersonByEmail(string Email);
        IEnumerable<Person> GetPeopleByName(string Name);
        IEnumerable<Person> GetPeopleByLastName(string LastName);
        void AddPerson(Person person);
        void DeletePerson(Person person);
        void DeletePersonById(string id);
        void DeletePersonByEmail(string email);
        void AddPeopleToJson();
        void DeletePersonAt(int id);
        void AddPeopleToMemDb();
    }
}