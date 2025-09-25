using AutoPublish.Application.Interfaces.Repositories;
using AutoPublish.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AutoPublish.Infrastructure.Persistence.Repositories
{
    public class ProjectRepository(AutoPublishDbContext db) : IProjectRepository
    {
        public async Task AddAsync(Project project)
        {
            await db.Projects.AddAsync(project);
            await db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            Project? project = await db.Projects.FirstOrDefaultAsync(p => p.Id == id);

            if (project is not null)
            {
                db.Projects.Remove(project);

                await db.SaveChangesAsync();
            }
        }

        public async Task<List<Project>> GetAllAsync()
        {
            return await db.Projects.ToListAsync();
        }

        public async Task<Project?> GetByIdAsync(int id)
        {
            return await db.Projects.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task UpdateAsync(Project project)
        {
            db.Projects.Update(project);

            await db.SaveChangesAsync();
        }

        public async Task<bool> ExistsByName(string name)
        {
            return await db.Projects.AnyAsync(p => p.Name == name);
        }

        public async Task<bool> ExistsByGITPath(string gitPath)
        {
            return await db.Projects.AnyAsync(p => p.GITPath == gitPath);
        }
    }
}
