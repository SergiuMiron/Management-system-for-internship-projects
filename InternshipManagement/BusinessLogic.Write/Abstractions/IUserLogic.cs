using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Abstractions
{
    public interface IUserLogic
    {
        void CreateManagerAccount(ManagerDto manager);
    }
}
