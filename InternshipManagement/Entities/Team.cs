﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Team : BaseEntity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string IdProject { get; set; }
    }
}
