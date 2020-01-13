using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.Write.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Write;

namespace Services.Write.Controllers
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

        //create team
        [HttpPost]
        public IActionResult Create([FromBody] TeamDto teamDto)
        {
            _teamLogic.Create(teamDto);
            return NoContent();
        }

        //edit team
        [HttpPut("update-team")]
        public IActionResult Update([FromBody] UpdateTeamDto teamDto)
        {
            _teamLogic.Update(teamDto);
            return NoContent();
        }

        //delete team
        [HttpDelete("delete-team/{id}")]
        public IActionResult Delete([FromRoute] string id)
        {
            _teamLogic.Delete(id);
            return NoContent();
        }
    }
}