using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Write.Configurations.Entities
{
    public class FeedbackConfiguration : BaseEntityConfiguration, IEntityTypeConfiguration<Feedback>
    {
        public void Configure(EntityTypeBuilder<Feedback> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Description).IsRequired();

            builder.Property(p => p.Rating).IsRequired();
        }
    }
}
