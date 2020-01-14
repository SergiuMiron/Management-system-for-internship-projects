using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Abstractions
{
    public interface ITeamLogic
    {
        void Create(TeamDto team);

        void Update(UpdateTeamDto team);

        void Delete(string id);
    }
}
