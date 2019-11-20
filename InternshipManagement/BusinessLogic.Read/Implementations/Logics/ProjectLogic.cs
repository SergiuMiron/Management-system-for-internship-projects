using System;
using System.Collections.Generic;
using System.Text;
using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using DataAccess.Read.Abstractions;
using Models.Read;

namespace BusinessLogic.Read.Implementations.Logics
{
    public class ProjectLogic : IProjectLogic
    {
        private readonly IProjectQueryBuilder _queryBuilder;

        private readonly IRepository _repository;

        public ProjectLogic(IProjectQueryBuilder queryBuilder, IRepository repository)
        {
            _queryBuilder = queryBuilder;
            _repository = repository;
        }

        public IEnumerable<ProjectDto> GetAll()
        {
            var query = _queryBuilder.BuildGetQuery();
            return _repository.ExecuteQuery<ProjectDto>(query);
        }
    }
}
