using System;
using System.Collections.Generic;
using System.Linq;
using Core.EF;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using Services.Interfaces;

namespace Services
{
    public class PersonManagementRepository : IPersonManagementRepository
    {
        private PersonDbContext personDbContext;

        public PersonManagementRepository(PersonDbContext personDbContext)
        {
            this.personDbContext = personDbContext;
        }
        public void AddAccessToPerson(DateTime AccessFrom,DateTime AccessTo, string personId)
        {
            if (personDbContext.People.FirstOrDefault(x => x.id == personId).accessibilities == null)
            {
                personDbContext.People.FirstOrDefault(x => x.id == personId).accessibilities = new List<Accessibility>();
            }

            personDbContext.People
            .Include(x => x.accessibilities)
            .FirstOrDefault(x => x.id == personId).accessibilities.Add(new Accessibility()
            {
                AccessFrom = AccessFrom,
                AccessTo = AccessTo
            });
            personDbContext.SaveChanges();
        }

        public void AddRoleToPerson(RoleEnum role, string personId)
        {
            if (personDbContext.People.FirstOrDefault(x => x.id == personId).roles == null)
            {
                personDbContext.People.FirstOrDefault(x => x.id == personId).roles = new List<Role>();
            }

            personDbContext.People
            .Include(x => x.roles)
            .FirstOrDefault(x => x.id == personId).roles.Add(new Role(){
                role = role
            });
            personDbContext.SaveChanges();
        }
    }
}