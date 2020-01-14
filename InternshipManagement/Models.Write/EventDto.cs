using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Write
{
    public class EventDto
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Department { get; set; }
    }
}
