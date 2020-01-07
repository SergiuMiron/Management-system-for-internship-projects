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
    public class TrainersController : ControllerBase
    {
        private readonly ITrainerLogic _trainerLogic;

        public TrainersController(ITrainerLogic trainerLogic)
        {
            _trainerLogic = trainerLogic;
        }

        // GET api/projects
        [HttpGet]
        public IEnumerable<TrainerDto> GetAll()
        {
            return _trainerLogic.GetAll();
        }

        [HttpGet("{id}")]
        public IEnumerable<TrainerDto> GetAllByProjectId([FromRoute] Guid id)
        {
            return _trainerLogic.GetAllByProjectId(id);
        }
    }
}