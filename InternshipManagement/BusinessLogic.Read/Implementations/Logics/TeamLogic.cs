using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using DataAccess.Read.Abstractions;
using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.Logics
{
    public class TeamLogic : ITeamLogic
    {
        private readonly ITeamQueryBuilder _queryBuilder;

        private readonly IRepository _repository;

        public TeamLogic(ITeamQueryBuilder queryBuilder, IRepository repository)
        {
            _queryBuilder = queryBuilder;
            _repository = repository;
        }

        public IEnumerable<TeamDto> GetAll()
        {
            var query = _queryBuilder.BuildGetQuery();
            return _repository.ExecuteQuery<TeamDto>(query);
        }

        public TeamDto GetById(Guid id)
        {
            var query = _queryBuilder.BuildGetByIdQuery(id);
            return _repository.ExecuteQueryFirstOrDefault<TeamDto>(query);
        }
    }
}
