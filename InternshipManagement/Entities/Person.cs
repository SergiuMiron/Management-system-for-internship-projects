using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Person
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Cnp { get; set; }

        public int Age { get; set; }

        public string Department { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}
