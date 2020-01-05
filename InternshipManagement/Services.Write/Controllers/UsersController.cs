using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Write;
using BusinessLogic.Write.Abstractions;

namespace Services.Write.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserLogic _userLogic;

        public UsersController(IUserLogic userLogic)
        {
            _userLogic = userLogic;
        }

        //create manager account
        [HttpPost("create-manager")]
        public IActionResult CreateManagerAccount([FromBody] ManagerDto managerDto)
        {
            _userLogic.CreateManagerAccount(managerDto);
            return NoContent();
        }

        //create trainer account
        [HttpPost("create-trainer")]
        public IActionResult CreateTrainerAccount([FromBody] TrainerDto trainerDto)
        {
            _userLogic.CreateTrainerAccount(trainerDto);
            return NoContent();
        }

        //create intern account
        [HttpPost("create-intern")]
        public IActionResult CreateInternAccount([FromBody] InternDto internDto)
        {
            _userLogic.CreateInternAccount(internDto);
            return NoContent();
        }
    }
}