using System;
using System.Collections.Generic;
using System.Text;
using Models.Write;

namespace BusinessLogic.Write.Abstractions
{
    public interface IProjectLogic
    {
        void Create(ProjectDto project);

        void Update(ProjectDto project);

        void Delete(string id);
    }
}
