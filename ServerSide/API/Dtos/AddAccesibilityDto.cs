using System;
using Core.Models;

namespace API.Dtos
{
    public class AddAccesibilityDto
    {
        public DateTime AccessFrom { get; set; }
        public DateTime AccessTo { get; set; }
        public string PersonId { get; set; }
    }
}