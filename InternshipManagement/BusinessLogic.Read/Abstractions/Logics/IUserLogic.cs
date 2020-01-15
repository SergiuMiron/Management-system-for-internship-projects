using System;
using System.Collections.Generic;
using System.Text;
using Models.Read;

namespace BusinessLogic.Read.Abstractions.Logics
{
    public interface IUserLogic
    {
        IEnumerable<UserDto> GetAll();

        UserDto GetByUsernameAndPassword(string username, string password);

        UserDto Authenticate(string username, string password);

        ManagerDto GetManagerById(Guid id);

        TrainerDto GetTrainerById(Guid id);

        InternDto GetInternById(Guid id);
    }
}
