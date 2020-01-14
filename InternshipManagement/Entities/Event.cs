using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Event : BaseEntity
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Department { get; set; }
    }
}
