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
    public class TeamsController : ControllerBase
    {
        private readonly ITeamLogic _teamLogic;

        public TeamsController(ITeamLogic teamLogic)
        {
            _teamLogic = teamLogic;
        }

        [HttpGet]
        public IEnumerable<TeamDto> GetAll()
        {
            return _teamLogic.GetAll();
        }

        [HttpGet("{id}")]
        public TeamDto GetById([FromRoute] Guid id)
        {
            return _teamLogic.GetById(id);
        }
    }
}