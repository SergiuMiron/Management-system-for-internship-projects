using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Abstractions
{
    public interface ITrainerLogic
    {
        void UpdateTrainersProject(string projectId, List<TrainerDto> trainersId);
    }
}
