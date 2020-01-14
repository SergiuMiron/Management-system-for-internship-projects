using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using DataAccess.Read.Abstractions;
using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.Logics
{
    public class FeedbackLogic : IFeedbackLogic
    {
        private readonly IFeedbackQueryBuilder _queryBuilder;

        private readonly IRepository _repository;

        public FeedbackLogic(IFeedbackQueryBuilder queryBuilder, IRepository repository)
        {
            _queryBuilder = queryBuilder;
            _repository = repository;
        }

        public IEnumerable<FeedbackDto> GetByInternId(Guid id)
        {
            var query = _queryBuilder.BuildGetByInternIdQuery(id);
            return _repository.ExecuteQuery<FeedbackDto>(query);
        }
    }
}
