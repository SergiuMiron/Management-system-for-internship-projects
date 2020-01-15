using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Abstractions
{
    public interface IInternLogic
    {
        void UpdateInternsTeam(string teamId, List<InternDto> trainersId);
    }
}
