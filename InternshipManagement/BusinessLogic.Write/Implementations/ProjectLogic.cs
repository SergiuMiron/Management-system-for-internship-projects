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
                IdSdm = project.IdSdm
            };

            _repository.Insert(newProject);
            _repository.Save();
        }

        public void Update(UpdateProjectDto project)
        {
            Guid Id = new Guid(project.Id);
            Project projectToUpdate = _repository.GetByFilter<Project>(p => p.Id == Id);

            if(projectToUpdate == null)
            {
                return;
            }

            if(project.Name != null) { projectToUpdate.Name = project.Name; }
            if (project.StartDate != null) { projectToUpdate.StartDate = project.StartDate; }
            if (project.EndDate != null) { projectToUpdate.EndDate = project.EndDate; }
            if (project.TechnologyStack != null) { projectToUpdate.TechnologyStack = project.TechnologyStack; }

            _repository.Update(projectToUpdate);
            _repository.Save();
        }

        public void Delete(string id)
        {
            Guid Id = new Guid(id);
            Project productToDelete = _repository.GetByFilter<Project>(p => p.Id == Id);

            if (productToDelete == null)
            {
                return;
            }

            _repository.Delete(productToDelete);
            _repository.Save();
        }
    }
}
