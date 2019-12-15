using System;
using System.Collections.Generic;
using System.Text;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using BusinessLogic.Read.Common.QueryBuilder.Implementations;
using BusinessLogic.Read.Common.QueryBuilder.Implementations.Enums;

namespace BusinessLogic.Read.Implementations.QueryBuilders
{
    public class UserQueryBuilder : IUserQueryBuilder
    {
        public string BuildGetQuery()
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Sdm");
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByUsernameAndPasswordQuery(string username, string password)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Sdm");
            queryBuilder.AddWhere("Username", Comparison.Equals, username);
            queryBuilder.AddWhere("Password", Comparison.Equals, password);
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }
    }
}
