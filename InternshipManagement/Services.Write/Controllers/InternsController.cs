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
    public class InternsController : ControllerBase
    {
        private readonly IInternLogic _internLogic;

        public InternsController(IInternLogic internLogic)
        {
            _internLogic = internLogic;
        }

        [HttpPut("update-interns/team/{id}")]
        public IActionResult UpdateInternsTeam([FromRoute] string id, [FromBody] List<InternDto> interns)
        {
            _internLogic.UpdateInternsTeam(id, interns);
            return NoContent();
        }
    }
}