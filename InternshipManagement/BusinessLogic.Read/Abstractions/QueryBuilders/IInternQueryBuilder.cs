﻿using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.QueryBuilders
{
    public interface IInternQueryBuilder
    {
        string BuildGetQuery();

        string BuildGetByProjectIdQuery(Guid id);

        string BuildGetByTeamIdQuery(Guid id);
    }
}
