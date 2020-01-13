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
    public class FeedbacksController : ControllerBase
    {
        private readonly IFeedbackLogic _feedbackLogic;

        public FeedbacksController(IFeedbackLogic feedbackLogic)
        {
            _feedbackLogic = feedbackLogic;
        }

        //create feedback
        [HttpPost("create-feedback")]
        public IActionResult Create([FromBody] FeedbackDto feedbackDto)
        {
            _feedbackLogic.Create(feedbackDto);
            return NoContent();
        }

        //update feedback
        [HttpPost("update-feedback/{id}")]
        public IActionResult Update([FromBody] FeedbackDto feedbackDto)
        {
            _feedbackLogic.Update(feedbackDto);
            return NoContent();
        }
    }
}