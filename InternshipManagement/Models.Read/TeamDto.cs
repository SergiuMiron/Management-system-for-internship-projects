﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Read
{
    public class TeamDto : BaseModel
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string IdProject { get; set; }
    }
}
