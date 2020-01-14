using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Abstractions
{
    public interface IEventLogic
    {
        void Create(EventDto eventDto);

        void Update(UpdateEventDto eventDto);

        void Delete(string id);
    }
}
