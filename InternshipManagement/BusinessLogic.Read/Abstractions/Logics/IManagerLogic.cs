using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.Logics
{
    public interface IManagerLogic
    {
        IEnumerable<ManagerDto> GetAll();

        ManagerDto GetByProjectId(Guid id);
    }
}
