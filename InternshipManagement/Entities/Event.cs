using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Event
    {
        public Guid Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public string IdMentor { get; set; }
    }
}
