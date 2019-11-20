using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Read
{
    public class InternDto : BaseModel
    {
        public string Name { get; set; }

        public string Cnp { get; set; }

        public int Age { get; set; }

        public string Department { get; set; }

        public string Username { get; set; }

        public int Rating { get; set; }

        public string IdTeam { get; set; }

        public string IdProject { get; set; }
    }
}
