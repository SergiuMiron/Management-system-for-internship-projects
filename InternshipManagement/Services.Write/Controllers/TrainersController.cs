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
    public class TrainersController : ControllerBase
    {
        private readonly ITrainerLogic _trainerLogic;

        public TrainersController(ITrainerLogic trainerLogic)
        {
            _trainerLogic = trainerLogic;
        }

        public IActionResult UpdateTrainersProject([FromRoute] string projectId, [FromBody] List<TrainerDto> trainers)
        {
            _trainerLogic.UpdateTrainersProject(projectId, trainers);
            return NoContent();
        }
    }
}