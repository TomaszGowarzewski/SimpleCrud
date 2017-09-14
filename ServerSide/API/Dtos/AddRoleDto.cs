using Core.Models;

namespace API.Dtos
{
    public class AddRoleDto
    {
         public RoleEnum role; 
        public string PersonId { get; set; }
    }
}