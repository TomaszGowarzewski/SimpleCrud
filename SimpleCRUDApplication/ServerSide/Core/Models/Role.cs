using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class Role
    {
        [Key]
        public string Id { get;set; }
       public RoleEnum role {get;set;}

       public Role()
       {
          Id = Guid.NewGuid().ToString(); 
       }
    }
}