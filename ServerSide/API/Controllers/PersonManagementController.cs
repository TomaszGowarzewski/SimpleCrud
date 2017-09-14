using Microsoft.AspNetCore.Mvc;
using Core.Models;
using Services.Interfaces;
using API.Dtos;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class PersonManagementController : Controller
    {
        private IPersonManagementRepository personManagementRepository;

        public PersonManagementController(IPersonManagementRepository personManagementRepository)
        {
            this.personManagementRepository = personManagementRepository;
        }

        [HttpPost("AddAccessibility")]
        public void AddAccessibility([FromBody]AddAccesibilityDto addAccesibilityDto)
        {
            this.personManagementRepository.AddAccessToPerson(addAccesibilityDto.AccessFrom,addAccesibilityDto.AccessTo, addAccesibilityDto.PersonId);
        }

        [HttpPost("AddRole")]
        public void AddRole([FromBody]AddRoleDto addRoleDto)
        {
            this.personManagementRepository.AddRoleToPerson(addRoleDto.role, addRoleDto.PersonId);
        }
    }
}