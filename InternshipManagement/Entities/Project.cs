﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Project
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string TehnologyStack { get; set; }
    }
}
