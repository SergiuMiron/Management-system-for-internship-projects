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
    [Route("api/projects")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectLogic _projectLogic;

        public ProjectsController(IProjectLogic projectLogic)
        {
            _projectLogic = projectLogic;
        }

        [HttpGet]
        public IEnumerable<ProjectDto> GetAll()
        {
            return _projectLogic.GetAll();
        }
    }
}