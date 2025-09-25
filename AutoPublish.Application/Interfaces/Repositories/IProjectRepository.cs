using AutoPublish.Domain.Entities;

namespace AutoPublish.Application.Interfaces.Repositories
{
    public interface IProjectRepository
    {
        Task<Project?> GetByIdAsync(int id);
        Task AddAsync(Project project);
        Task UpdateAsync(Project project);
        Task DeleteAsync(int id);
        Task<List<Project>> GetAllAsync();

        Task<bool> ExistsByName(string name);
        Task<bool> ExistsByGITPath(string gitPath);
    }
}
