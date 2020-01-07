using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using DataAccess.Read.Abstractions;
using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.Logics
{
    public class ManagerLogic : IManagerLogic
    {
        private readonly IManagerQueryBuilder _queryBuilder;

        private readonly IRepository _repository;

        public ManagerLogic(IManagerQueryBuilder queryBuilder, IRepository repository)
        {
            _queryBuilder = queryBuilder;
            _repository = repository;
        }
        public IEnumerable<ManagerDto> GetAll()
        {
            var query = _queryBuilder.BuildGetQuery();
            return _repository.ExecuteQuery<ManagerDto>(query);
        }

        public ManagerDto GetById(Guid id)
        {
            var query = _queryBuilder.BuildGetByIdQuery(id);
            return _repository.ExecuteQueryFirstOrDefault<ManagerDto>(query);
        }
    }
}
