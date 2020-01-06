using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class UserLogic : IUserLogic
    {
        private readonly IRepository _repository;

        public UserLogic(IRepository repository)
        {
            _repository = repository;
        }

        public void CreateManagerAccount(ManagerDto manager)
        { 

            var newManager = new Manager
            {
                Id = Guid.NewGuid(),
                Name = manager.Name,
                Cnp = manager.Cnp,
                Age = manager.Age,
                Department = "Management",
                Username = manager.Username,
                Password = manager.Password
            };

            _repository.Insert(newManager);
            _repository.Save();
        }

        public void CreateTrainerAccount(TrainerDto trainer)
        {
            var newTrainer = new Trainer
            {
                Id = Guid.NewGuid(),
                Name = trainer.Name,
                Cnp = trainer.Cnp,
                Age = trainer.Age,
                Department = trainer.Department,
                TechnicalLevel = trainer.TechnicalLevel,
                Username = trainer.Username,
                Password = trainer.Password
            };

            _repository.Insert(newTrainer);
            _repository.Save();
        }

        public void CreateInternAccount(InternDto intern)
        {
            var newIntern = new Intern
            {
                Id = Guid.NewGuid(),
                Name = intern.Name,
                Cnp = intern.Cnp,
                Age = intern.Age,
                Department = intern.Department,
                Username = intern.Username,
                Password = intern.Password
            };

            _repository.Insert(newIntern);
            _repository.Save();
        }
    }
}
