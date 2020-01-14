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
    public class FeedbacksController : ControllerBase
    {
        private readonly IFeedbackLogic _feedbackLogic;

        public FeedbacksController(IFeedbackLogic feedbackLogic)
        {
            _feedbackLogic = feedbackLogic;
        }

        [HttpGet("{id}")]
        public IEnumerable<FeedbackDto> GetByInternId([FromRoute] Guid id)
        {
            return _feedbackLogic.GetByInternId(id);
        }
    }
}