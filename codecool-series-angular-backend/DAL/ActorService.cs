using codecool_series_angular_backend.Models;
using codecool_series_angular_backend.Models.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace codecool_series_angular_backend.DAL;

public class ActorService : IActorService
{
    private codecoolseriesContext _context;

    public ActorService(codecoolseriesContext context)
    {
        _context = context;
    }

    public async Task<ActorViewModel> GetActorByName(string actorName)
    {
        var actorFromDb = await _context.Actors
            .Include(actor => actor.ShowCharacters)
            .ThenInclude(showchar => showchar.Show)
            .AsNoTracking()
            .Where(actor => actor.Name == actorName)
            .FirstAsync();

        var actor = new ActorViewModel
        {
            Id = actorFromDb.Id,
            Name = actorFromDb.Name,
            Birthday = actorFromDb.Birthday,
            Death = actorFromDb.Death,
            Biography = actorFromDb.Biography,
            ShowCharacters = actorFromDb.ShowCharacters.OrderBy(showchar => showchar.ShowId).ToList(),
            ShowList = actorFromDb.ShowCharacters.OrderBy(show=>show.ShowId).Select(showchar => new KeyValuePair<int, string>(showchar.ShowId, showchar.Show.Title))
                .ToDictionary(showchar => showchar.Key, showchar => showchar.Value)
        };

        return actor;
    }
}