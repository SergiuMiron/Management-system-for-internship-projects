﻿using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.Logics
{
    public interface IProjectLogic
    {
        IEnumerable<ProjectDto> GetAll();
    }
}
