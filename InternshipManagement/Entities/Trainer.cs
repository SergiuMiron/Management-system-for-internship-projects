﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Trainer : BaseEntity
    {
        public string Name { get; set; }

        public string Cnp { get; set; }

        public int Age { get; set; }

        public string Department { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string TechnicalLevel { get; set; }

        public string IdTeam { get; set; }

        public string IdProject { get; set; }

        //public string IdSdm { get; set; }
    }
}
