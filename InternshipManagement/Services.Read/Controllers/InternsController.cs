﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Read.Abstractions.Logics;
using Models.Read;

namespace Services.Read.Controllers
{
    [Route("api/interns")]
    [ApiController]
    public class InternsController : ControllerBase
    {
        private readonly IInternLogic _internLogic;

        public InternsController(IInternLogic internLogic)
        {
            _internLogic = internLogic;
        }

        // GET api/interns
        [HttpGet]
        public IEnumerable<InternDto> GetAll()
        {
            return _internLogic.GetAll();
        }

        [HttpGet("{id}")]
        public IEnumerable<InternDto> GetAllByProjectId([FromRoute] Guid id)
        {
            return _internLogic.GetAllByProjectId(id);
        }
    }
}