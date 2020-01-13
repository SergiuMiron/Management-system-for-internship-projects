using Models.Write;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Write.Abstractions
{
    public interface IFeedbackLogic
    {
        void Create(FeedbackDto feedback);
        void Update(FeedbackDto feedback);
    }
}
