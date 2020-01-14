using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Abstractions.QueryBuilders
{
    public interface IFeedbackQueryBuilder
    {
        string BuildGetByInternIdQuery(Guid id);
    }
}
