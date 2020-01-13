using BusinessLogic.Read.Abstractions.QueryBuilders;
using BusinessLogic.Read.Common.QueryBuilder.Implementations;
using BusinessLogic.Read.Common.QueryBuilder.Implementations.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.QueryBuilders
{
    public class FeedbackQueryBuilder : IFeedbackQueryBuilder
    {
        public string BuildGetByInternIdQuery(Guid id)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Feedback");
            queryBuilder.AddWhere("IdIntern", Comparison.Equals, id.ToString());
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }
    }
}
