using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.EF;
using Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private IPersonRepository repository;
        private UserDbContext context;
        private IPersonManagementRepository personManagementRepository;

        public PeopleController(IPersonRepository repository, UserDbContext context, UserManager<IdentityUser> userManager, IPersonManagementRepository personManagementRepository)
        {
            this.userManager = userManager;
            this.repository = repository;
            this.context = context;
            this.personManagementRepository = personManagementRepository;
        }


        [HttpGet("GetAllPeople")]
        public IEnumerable<Person> GetAllPeople()
        {
            return this.repository.GetPeople();
        }

        [HttpGet("GetAllPeopleByName/{name}")]
        public IEnumerable<Person> GetAllPeopleByName(string name)
        {
            return this.repository.GetPeopleByName(name);
        }

        [HttpGet("GetAllPeopleByLastName/{Lastname}")]
        public IEnumerable<Person> GetAllPeopleByLastName(string Lastname)
        {
            return this.repository.GetPeopleByLastName(Lastname);
        }

        [HttpGet("GetPersonById/{Id}")]
        public Person GetPersonById(string id)
        {
            return this.repository.GetPersonById(id);
        }

        [HttpGet("GetPersonByEmail/{email}")]
        public Person GetPersonByEmail(string email)
        {
            return this.repository.GetPersonByEmail(email);
        }

        [HttpPost("AddPerson")]
        public IActionResult Post([FromBody]Person person)
        {
            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }
            this.repository.AddPerson(person);
            return new JsonResult(person);
        }

        [HttpPost("DeletePerson")]
        public IActionResult HttpPost([FromBody]Person person)
        {
            this.repository.DeletePerson(person);
            return new JsonResult(person);
        }

        [HttpPost("DeletePersonByEmail")]
        public IActionResult HttpPost([FromBody]string email)
        {
            this.repository.DeletePersonByEmail(email);
            return new JsonResult(email);
        }

        [HttpPost("DeletePersonById")]
        public IActionResult DeletePersonById([FromBody]string Id)
        {
            this.repository.DeletePersonById(Id);
            return new JsonResult(Id);
        }

        [HttpPost("DeletePersonAt")]
        public IActionResult DeletePersonAt([FromBody]string idx)
        {
            System.Console.WriteLine(idx);
            this.repository.DeletePersonAt(int.Parse(idx));
            return new JsonResult("Person was deleted successfully");
        }

        [HttpGet("PutPeopleToMemDb")]
        public void costam()
        {
            this.repository.AddPeopleToMemDb();
        }
    }
}