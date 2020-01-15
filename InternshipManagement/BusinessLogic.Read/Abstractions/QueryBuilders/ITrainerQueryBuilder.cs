using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.QueryBuilders
{
    public interface ITrainerQueryBuilder
    {
        string BuildGetQuery();

        string BuildGetByProjectIdQuery(Guid id);

        string BuildGetByTeamIdQuery(Guid id);
    }
}
