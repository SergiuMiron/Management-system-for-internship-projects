using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using DataAccess.Read.Abstractions;
using Models.Read;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Implementations.Logics
{
    public class TrainerLogic : ITrainerLogic
    {

        private readonly ITrainerQueryBuilder _queryBuilder;

        private readonly IRepository _repository;

        public TrainerLogic(ITrainerQueryBuilder queryBuilder, IRepository repository)
        {
            _queryBuilder = queryBuilder;
            _repository = repository;
        }

        public IEnumerable<TrainerDto> GetAll()
        {
            var query = _queryBuilder.BuildGetQuery();
            return _repository.ExecuteQuery<TrainerDto>(query);
        }

        public IEnumerable<TrainerDto> GetAllByProjectId(Guid id)
        {
            var query = _queryBuilder.BuildGetByProjectIdQuery(id);
            return _repository.ExecuteQuery<TrainerDto>(query);
        }

        public IEnumerable<TrainerDto> GetAllByTeamId(Guid id)
        {
            var query = _queryBuilder.BuildGetByTeamIdQuery(id);
            return _repository.ExecuteQuery<TrainerDto>(query);
        }

    }
}
