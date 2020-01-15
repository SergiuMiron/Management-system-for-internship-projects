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
            Guid idTeam = Guid.NewGuid();
            var newTeam = new Team
            {
                Id = idTeam,
                Name = team.Name,
                Description = team.Description,
                IdProject = team.IdProject
            };

            Guid Id = new Guid(team.IdTrainerCreator);
            Trainer trainerToUpdate = _repository.GetByFilter<Trainer>(p => p.Id == Id);

            if (trainerToUpdate == null)
            {
                return;
            }

            trainerToUpdate.IdTeam = idTeam.ToString();
            trainerToUpdate.IdProject = team.IdProject;

            _repository.Insert(newTeam);
            _repository.Update(trainerToUpdate);
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
            if (team.Description != null) { teamToUpdate.Description = team.Description; }
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
