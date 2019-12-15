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
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectLogic _projectLogic;

        public ProjectsController(IProjectLogic projectLogic)
        {
            _projectLogic = projectLogic;
        }

        //create product
        [HttpPost]
        public IActionResult Create([FromBody] ProjectDto projectDto)
        {
            _projectLogic.Create(projectDto);
            return NoContent();
        }
    }
}