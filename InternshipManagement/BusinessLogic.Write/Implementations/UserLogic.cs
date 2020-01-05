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
    }
}
