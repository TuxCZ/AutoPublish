using AutoPublish.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AutoPublish.Infrastructure.Persistence
{
    public class AutoPublishDbContext(DbContextOptions<AutoPublishDbContext> options) : DbContext(options)
    {
        public required DbSet<Project> Projects { get; set; }
        public required DbSet<ProjectDependency> ProjectDependencies { get; set; }

        public required DbSet<Job> Jobs { get; set; }
        public required DbSet<JobStep> JobSteps { get; set; }

        public required DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>().ToTable("tProjects");
            modelBuilder.Entity<ProjectDependency>().ToTable("tProjectDependencies");

            modelBuilder.Entity<Job>().ToTable("tJobs");
            modelBuilder.Entity<JobStep>().ToTable("tJobStep");

            modelBuilder.Entity<User>().ToTable("tUsers");
        }
    }
}
