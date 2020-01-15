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

            queryBuilder.SelectFromTable("Manager");
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByUsernameAndPasswordQueryManager(string username, string password)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Manager");
            queryBuilder.AddWhere("Username", Comparison.Equals, username);
            queryBuilder.AddWhere("Password", Comparison.Equals, password);
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByUsernameAndPasswordQueryTrainer(string username, string password)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Trainer");
            queryBuilder.AddWhere("Username", Comparison.Equals, username);
            queryBuilder.AddWhere("Password", Comparison.Equals, password);
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }

        public string BuildGetByUsernameAndPasswordQueryIntern(string username, string password)
        {
            var queryBuilder = new SelectQueryBuilder();

            queryBuilder.SelectFromTable("Intern");
            queryBuilder.AddWhere("Username", Comparison.Equals, username);
            queryBuilder.AddWhere("Password", Comparison.Equals, password);
            queryBuilder.BuildQuery();

            return queryBuilder.BuildQuery();
        }
    }
}
