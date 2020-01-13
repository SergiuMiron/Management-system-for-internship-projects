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
    public class EventsController : ControllerBase
    {
        private readonly IEventLogic _eventLogic;

        public EventsController(IEventLogic eventLogic)
        {
            _eventLogic = eventLogic;
        }

        [HttpGet]
        public IEnumerable<EventDto> GetAll()
        {
            return _eventLogic.GetAll();
        }
    }
}