using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.QueryBuilders
{
    public interface IUserQueryBuilder
    {
        string BuildGetQuery();

        string BuildGetByUsernameAndPasswordQueryManager(string username, string password);

        string BuildGetByUsernameAndPasswordQueryTrainer(string username, string password);

        string BuildGetByUsernameAndPasswordQueryIntern(string username, string password);
    }
}
