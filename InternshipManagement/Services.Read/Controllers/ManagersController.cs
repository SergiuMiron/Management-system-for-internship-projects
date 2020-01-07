using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.Read.Abstractions.Logics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Read;

namespace Services.Read.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagersController : ControllerBase
    {
        private readonly IManagerLogic _managerLogic;

        public ManagersController(IManagerLogic managerLogic)
        {
            _managerLogic = managerLogic;
        }

        // GET api/interns
        [HttpGet]
        public IEnumerable<ManagerDto> GetAll()
        {
            return _managerLogic.GetAll();
        }

        [HttpGet("{id}")]
        public ManagerDto GetById([FromRoute] Guid id)
        {
            return _managerLogic.GetById(id);
        }
    }
}