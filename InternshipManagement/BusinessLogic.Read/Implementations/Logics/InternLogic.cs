using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using DataAccess.Read.Abstractions;
using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.Logics
{
    public class InternLogic : IInternLogic
    {
        private readonly IInternQueryBuilder _queryBuilder;

        private readonly IRepository _repository;

        public InternLogic(IInternQueryBuilder queryBuilder, IRepository repository)
        {
            _queryBuilder = queryBuilder;
            _repository = repository;
        }
        public IEnumerable<InternDto> GetAll()
        {
            var query = _queryBuilder.BuildGetQuery();
            return _repository.ExecuteQuery<InternDto>(query);
        }

        public IEnumerable<InternDto> GetAllByProjectId(Guid id)
        {
            var query = _queryBuilder.BuildGetByProjectIdQuery(id);
            return _repository.ExecuteQuery<InternDto>(query);
        }
    }
}
