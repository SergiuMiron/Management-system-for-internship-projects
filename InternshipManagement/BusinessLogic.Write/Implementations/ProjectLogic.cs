using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class ProjectLogic : IProjectLogic
    {
        private readonly IRepository _repository;

        public ProjectLogic(IRepository repository)
        {
            _repository = repository;
        }
        public void Create(ProjectDto project)
        {
            var newProject = new Project
            {
                Id = Guid.NewGuid(),
                Name = project.Name,
                StartDate = project.StartDate,
                EndDate = project.EndDate,
                TechnologyStack = project.TechnologyStack,
                IdSdm = Guid.NewGuid().ToString() //project.IdSdm  //to to: get for SdmId
            };

            _repository.Insert(newProject);
            _repository.Save();
        }
    }
}
