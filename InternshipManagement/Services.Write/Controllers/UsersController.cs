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
        [HttpPost]
        public IActionResult Create([FromBody] ManagerDto managerDto)
        {
            _userLogic.CreateManagerAccount(managerDto);
            return NoContent();
        }
    }
}