using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.Logics
{
    public interface IInternLogic
    {
        IEnumerable<InternDto> GetAll();

        IEnumerable<InternDto> GetAllByProjectId(Guid id);

        IEnumerable<InternDto> GetAllByTeamId(Guid id);
    }
}
