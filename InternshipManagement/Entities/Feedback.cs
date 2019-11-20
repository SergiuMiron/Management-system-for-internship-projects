using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Feedback : BaseEntity
    {
        public string Description { get; set; }

        public string IdIntern { get; set; }

        public string IdMentor { get; set; }

        public int Rating { get; set; }
    }
}
