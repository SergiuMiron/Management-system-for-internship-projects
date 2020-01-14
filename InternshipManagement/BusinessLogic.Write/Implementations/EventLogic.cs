using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class EventLogic : IEventLogic
    {
        private readonly IRepository _repository;

        public EventLogic(IRepository repository)
        {
            _repository = repository;
        }
        public void Create(EventDto eventDto)
        {
            var newEvent = new Event
            {
                Id = Guid.NewGuid(),
                Title = eventDto.Title,
                Description = eventDto.Description,
                StartDate = eventDto.StartDate,
                EndDate = eventDto.EndDate,
                Department = eventDto.Department
            };

            _repository.Insert(newEvent);
            _repository.Save();
        }

        public void Update(UpdateEventDto eventDto)
        {
            Guid Id = new Guid(eventDto.Id);
            Event eventToUpdate = _repository.GetByFilter<Event>(p => p.Id == Id);

            if (eventToUpdate == null)
            {
                return;
            }

            if (eventDto.Title != null) { eventToUpdate.Title = eventDto.Title; }
            if (eventDto.Description != null) { eventToUpdate.Description = eventDto.Description; }
            if (eventDto.StartDate != null) { eventToUpdate.StartDate = eventDto.StartDate; }
            if (eventDto.EndDate != null) { eventToUpdate.EndDate = eventDto.EndDate; }
            if (eventDto.Department != null) { eventToUpdate.Department = eventDto.Department; }

            _repository.Update(eventToUpdate);
            _repository.Save();
        }

        public void Delete(string id)
        {
            Guid Id = new Guid(id);
            Event eventToDelete = _repository.GetByFilter<Event>(p => p.Id == Id);

            if (eventToDelete == null)
            {
                return;
            }

            _repository.Delete(eventToDelete);
            _repository.Save();
        }
    }
}
