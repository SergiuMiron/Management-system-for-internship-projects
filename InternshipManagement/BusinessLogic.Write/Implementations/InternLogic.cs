using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class InternLogic : IInternLogic
    {
        private readonly IRepository _repository;

        public InternLogic(IRepository repository)
        {
            _repository = repository;
        }

        public void UpdateInternsTeam(string teamId, List<InternDto> interns)
        {
            foreach (InternDto intern in interns)
            {
                Guid Id = new Guid(intern.Id);
                Intern internToUpdate = _repository.GetByFilter<Intern>(p => p.Id == Id);
                Guid tId = new Guid(teamId);
                Team getTeam = _repository.GetByFilter<Team>(p => p.Id == tId);
                if (internToUpdate == null)
                {
                    return;
                }
                internToUpdate.IdTeam = teamId;
                internToUpdate.IdProject = getTeam.IdProject;

                _repository.Update(internToUpdate);
                _repository.Save();
            }
        }
    }
}
