using BusinessLogic.Read.Abstractions.QueryBuilders;
using BusinessLogic.Read.Common.QueryBuilder.Implementations;
using BusinessLogic.Read.Common.QueryBuilder.Implementations.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.QueryBuilders
{
    public class ManagerQueryBuilder : IManagerQueryBuilder
    {
        public string BuildGetQuery()
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Manager");
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByProjectIdQuery(Guid id)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Manager");
            queryBuilder.AddJoin(JoinType.InnerJoin, "Project", "IdSdm", Comparison.Equals, "Manager", "Id");
            queryBuilder.AddWhere("Project.Id", Comparison.Equals, id.ToString());
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }
    }
}
