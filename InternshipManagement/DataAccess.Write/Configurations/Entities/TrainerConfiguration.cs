using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Write.Configurations.Entities
{
    public class TrainerConfiguration : BaseEntityConfiguration, IEntityTypeConfiguration<Trainer>
    {
        public void Configure(EntityTypeBuilder<Trainer> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Name).IsRequired();

            builder.Property(p => p.Username).IsRequired();

            builder.Property(p => p.Cnp).IsRequired();

            builder.Property(p => p.Age).IsRequired();

            builder.Property(p => p.Department).IsRequired();

            builder.Property(p => p.Password).IsRequired().HasMaxLength(20);

            builder.Property(p => p.IdTeam).IsRequired();

            builder.Property(p => p.IdProject).IsRequired();
        }
    }
}
