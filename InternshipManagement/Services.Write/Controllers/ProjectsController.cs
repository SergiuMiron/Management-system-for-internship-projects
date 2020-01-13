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

        //create project
        [HttpPost]
        public IActionResult Create([FromBody] ProjectDto projectDto)
        {
            _projectLogic.Create(projectDto);
            return NoContent();
        }

        //edit project
        [HttpPut("update-project")]
        public IActionResult Update([FromBody] UpdateProjectDto projectDto)
        {
            _projectLogic.Update(projectDto);
            return NoContent();
        }

        //delete project
        [HttpDelete("delete-project/{id}")]
        public IActionResult Delete([FromRoute] string id)
        {
            _projectLogic.Delete(id);
            return NoContent();
        }
    }
}