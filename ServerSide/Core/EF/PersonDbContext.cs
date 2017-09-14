using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Core.EF
{
    public class PersonDbContext : DbContext
    {

        public PersonDbContext(DbContextOptions<PersonDbContext> options) : base(options)
        {
        }

        public DbSet<Person> People {get;set;}
    }
}