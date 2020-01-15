using BusinessLogic.Read.Abstractions.QueryBuilders;
using BusinessLogic.Read.Common.QueryBuilder.Implementations;
using BusinessLogic.Read.Common.QueryBuilder.Implementations.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.QueryBuilders
{
    public class TrainerQueryBuilder : ITrainerQueryBuilder
    {
        public string BuildGetQuery()
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Trainer");
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByProjectIdQuery(Guid id)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Trainer");
            queryBuilder.AddWhere("IdProject", Comparison.Equals, id.ToString());
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByTeamIdQuery(Guid id)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Trainer");
            queryBuilder.AddWhere("IdTeam", Comparison.Equals, id.ToString());
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }
    }
}
