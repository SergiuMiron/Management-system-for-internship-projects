using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Write
{
    public class UpdateProjectDto
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string TechnologyStack { get; set; }

        public string IdSdm { get; set; }
    }
}
