using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class Accessibility
    {
        [Key]
        public string id { get; set; }
        public DateTime AccessFrom { get; set; }
        public DateTime AccessTo { get; set; }

        public Accessibility()
        {
            id = Guid.NewGuid().ToString();
        }
    }
}