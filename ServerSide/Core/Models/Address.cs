using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class Address
    {
        [Key]
        public string id { get; set; }
        public string Street { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
    }
}