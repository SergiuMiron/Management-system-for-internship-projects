using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class TrainerLogic : ITrainerLogic
    {
        private readonly IRepository _repository;

        public TrainerLogic(IRepository repository)
        {
            _repository = repository;
        }

        public void UpdateTrainersProject(string projectId, List<TrainerDto> trainers)
        {
            foreach(TrainerDto trainer in trainers)
            {
                Guid Id = new Guid(trainer.Id);
                Trainer trainerToUpdate = _repository.GetByFilter<Trainer>(p => p.Id == Id);
                if (trainerToUpdate == null)
                {
                    return;
                }
                trainerToUpdate.IdProject = projectId;

                _repository.Update(trainerToUpdate);
                _repository.Save();
            }
        }
    }
}
