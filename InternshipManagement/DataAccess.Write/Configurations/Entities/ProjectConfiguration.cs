using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Write.Configurations.Entities
{
    public class ProjectConfiguration : BaseEntityConfiguration, IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Name).IsRequired().HasMaxLength(30);

            builder.Property(p => p.StartDate).IsRequired();

            builder.Property(p => p.EndDate).IsRequired();

            builder.Property(p => p.TechnologyStack).IsRequired();

            builder.Property(p => p.IdSdm).IsRequired();
        }
    }
}
