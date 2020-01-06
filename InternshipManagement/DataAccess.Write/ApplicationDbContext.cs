using DataAccess.Write.Configurations.Entities;
using Microsoft.EntityFrameworkCore;
using Entities;

namespace DataAccess.Write
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Event> Event { get; set; }
        public DbSet<Feedback> Feedback { get; set; }
        public DbSet<Intern> Intern { get; set; }
        public DbSet<Manager> Manager { get; set; }
        public DbSet<Trainer> Trainer { get; set; }
        public DbSet<Team> Team { get; set; }
        public DbSet<Project> Project { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EventConfiguration());
            modelBuilder.ApplyConfiguration(new FeedbackConfiguration());
            modelBuilder.ApplyConfiguration(new InternConfiguration());
            modelBuilder.ApplyConfiguration(new ManagerConfiguration());
            modelBuilder.ApplyConfiguration(new TrainerConfiguration());
            modelBuilder.ApplyConfiguration(new ProjectConfiguration());
            modelBuilder.ApplyConfiguration(new TeamConfiguration());
        }
    }
}