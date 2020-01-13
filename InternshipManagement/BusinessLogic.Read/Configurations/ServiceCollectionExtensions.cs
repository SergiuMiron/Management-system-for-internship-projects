using BusinessLogic.Read.Abstractions.Logics;
using BusinessLogic.Read.Abstractions.QueryBuilders;
using BusinessLogic.Read.Implementations.Logics;
using BusinessLogic.Read.Implementations.QueryBuilders;
using DataAccess.Read.Configurations;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Read.Configurations
{
    public static class ServiceCollectionExtensions
    {
        public static void AddBusinessLogic(this IServiceCollection services, string connectionString)
        {
            services.AddDataAccess(connectionString);
            services.AddScoped<IProjectQueryBuilder, ProjectQueryBuilder>();
            services.AddScoped<IProjectLogic, ProjectLogic>();

            services.AddScoped<IInternQueryBuilder, InternQueryBuilder>();
            services.AddScoped<IInternLogic, InternLogic>();

            services.AddScoped<IUserQueryBuilder, UserQueryBuilder>();
            services.AddScoped<IUserLogic, UserLogic>();

            services.AddScoped<ITrainerQueryBuilder, TrainerQueryBuilder>();
            services.AddScoped<ITrainerLogic, TrainerLogic>();

            services.AddScoped<IManagerQueryBuilder, ManagerQueryBuilder>();
            services.AddScoped<IManagerLogic, ManagerLogic>();

            services.AddScoped<ITeamQueryBuilder, TeamQueryBuilder>();
            services.AddScoped<ITeamLogic, TeamLogic>();

            services.AddScoped<IEventQueryBuilder, EventQueryBuilder>();
            services.AddScoped<IEventLogic, EventLogic>();

        }
    }
}
