using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class FeedbackLogic : IFeedbackLogic
    {
        private readonly IRepository _repository;

        public FeedbackLogic(IRepository repository)
        {
            _repository = repository;
        }
        public void Create(FeedbackDto feedback)
        {
            var newFeedback = new Feedback
            {
                Id = Guid.NewGuid(),
                Description = feedback.Description,
                IdIntern = feedback.IdIntern,
                IdMentor = feedback.IdMentor,
                Rating = feedback.Rating
            };

            _repository.Insert(newFeedback);
            _repository.Save();
        }

        public void Update(FeedbackDto feedback)
        {
            Feedback feedbackToUpdate = _repository.GetByFilter<Feedback>(p => p.IdIntern == feedback.IdIntern && p.IdMentor == feedback.IdMentor);

            if(feedbackToUpdate == null)
            {
                return;
            }

            if(feedback.Description != null) { feedbackToUpdate.Description = feedback.Description; }
            if (feedback.Rating != null) { feedbackToUpdate.Rating = feedback.Rating; }

            _repository.Update(feedbackToUpdate);
            _repository.Save();
        }
    }
}
