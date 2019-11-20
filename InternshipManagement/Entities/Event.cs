using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Event : BaseEntity
    {
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public string IdMentor { get; set; }
    }
}
