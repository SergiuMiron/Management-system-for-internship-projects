using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Team
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Descripiton { get; set; }

        public string IdProject { get; set; }
    }
}
