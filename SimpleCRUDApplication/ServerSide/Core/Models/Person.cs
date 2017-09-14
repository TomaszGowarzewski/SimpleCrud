using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class Person
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        [Key]
        public string id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public IEnumerable<Address> Addresses {get;set;}
        public virtual List<Accessibility> accessibilities {get;set;}
        public List<Role> roles {get;set;}

        public Person(string Name, string LastName, string Email,string Phone,string id,IEnumerable<Address> Addresses)
        {
            this.Name = Name;
            this.LastName = LastName;
            this.Email = Email;
            this.id = id;
            this.Phone = Phone;
            this.Addresses = Addresses;
        }

        public Person()
        {
        }
    }
}