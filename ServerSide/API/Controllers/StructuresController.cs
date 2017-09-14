using Microsoft.AspNetCore.Mvc;
using Services.Interfaces;

namespace API.Controllers
{
    public class StructuresController : Controller
    {
        private IPersonRepository repository;

        public StructuresController(IPersonRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("PutPeopleToMemDb")]
        public void costam()
        {
            this.repository.AddPeopleToMemDb();
        }

        [HttpGet("PutPeopleToJson")]
        public void costam2()
        {
            this.repository.AddPeopleToJson();
        }

    }
}