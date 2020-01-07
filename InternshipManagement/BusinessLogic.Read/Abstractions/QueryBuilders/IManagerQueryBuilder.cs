using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.QueryBuilders
{
    public interface IManagerQueryBuilder
    {
        string BuildGetQuery();

        string BuildGetByIdQuery(Guid id);
    }
}
