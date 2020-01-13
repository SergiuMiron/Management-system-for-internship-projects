using BusinessLogic.Write.Abstractions;
using DataAccess.Write.Abstractions;
using Entities;
using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Implementations
{
    public class TeamLogic : ITeamLogic
    {
        private readonly IRepository _repository;

        public TeamLogic(IRepository repository)
        {
            _repository = repository;
        }
        public void Create(TeamDto team)
        {
            var newTeam = new Team
            {
                Id = Guid.NewGuid(),
                Name = team.Name,
                Descripiton = team.Descripiton,
                IdProject = team.IdProject
            };

            _repository.Insert(newTeam);
            _repository.Save();
        }

        public void Update(UpdateTeamDto team)
        {
            Guid Id = new Guid(team.Id);
            Team teamToUpdate = _repository.GetByFilter<Team>(p => p.Id == Id);

            if (teamToUpdate == null)
            {
                return;
            }

            if (team.Name != null) { teamToUpdate.Name = team.Name; }
            if (team.Descripiton != null) { teamToUpdate.Descripiton = team.Descripiton; }
            if (team.IdProject != null) { teamToUpdate.IdProject = team.IdProject; }

            _repository.Update(teamToUpdate);
            _repository.Save();
        }

        public void Delete(string id)
        {
            Guid Id = new Guid(id);
            Team teamToDelete = _repository.GetByFilter<Team>(p => p.Id == Id);

            if (teamToDelete == null)
            {
                return;
            }

            _repository.Delete(teamToDelete);
            _repository.Save();
        }
    }
}
