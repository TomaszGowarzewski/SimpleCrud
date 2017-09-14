using System;
using Core.Models;

namespace Services.Interfaces
{
    public interface IPersonManagementRepository
    {
         void AddAccessToPerson(DateTime AccessFrom,DateTime AccessTo, string personId);
         void AddRoleToPerson(RoleEnum role,string personId);
    }
}