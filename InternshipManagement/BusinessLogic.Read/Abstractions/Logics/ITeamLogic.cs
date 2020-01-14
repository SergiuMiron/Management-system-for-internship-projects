using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.Logics
{
    public interface ITeamLogic
    {
        IEnumerable<TeamDto> GetAll();

        TeamDto GetById(Guid id);
    }
}
