using BusinessLogic.Read.Abstractions.QueryBuilders;
using BusinessLogic.Read.Common.QueryBuilder.Implementations;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.QueryBuilders
{
    public class EventQueryBuilder : IEventQueryBuilder
    {
        public string BuildGetQuery()
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Event");
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }
    }
}
