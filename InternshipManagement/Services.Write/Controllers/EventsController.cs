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
    public class EventsController : ControllerBase
    {
        private readonly IEventLogic _eventLogic;

        public EventsController(IEventLogic eventLogic)
        {
            _eventLogic = eventLogic;
        }

        //create event
        [HttpPost]
        public IActionResult Create([FromBody] EventDto eventDto)
        {
            _eventLogic.Create(eventDto);
            return NoContent();
        }

        //edit event
        [HttpPut("update-event")]
        public IActionResult Update([FromBody] UpdateEventDto eventDto)
        {
            _eventLogic.Update(eventDto);
            return NoContent();
        }

        //delete event
        [HttpDelete("delete-event/{id}")]
        public IActionResult Delete([FromRoute] string id)
        {
            _eventLogic.Delete(id);
            return NoContent();
        }
    }
}