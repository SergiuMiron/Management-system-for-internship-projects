using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Write.Configurations.Entities
{
    public class TeamConfiguration : BaseEntityConfiguration, IEntityTypeConfiguration<Team>
    {
        public void Configure(EntityTypeBuilder<Team> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Name).IsRequired().HasMaxLength(30);

            builder.Property(p => p.Description).IsRequired();

            builder.Property(p => p.IdProject).IsRequired();
        }
    }
}
