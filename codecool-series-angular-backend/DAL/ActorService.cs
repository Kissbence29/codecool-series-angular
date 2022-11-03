using codecool_series_angular_backend.Models;
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
            .ThenInclude(showchar=>showchar.Show)
            .Where(actor => actor.Name == actorName)
            .FirstAsync();

        var actor = new ActorViewModel
        {
            Id = actorFromDb.Id,
            Name = actorFromDb.Name,
            Birthday = actorFromDb.Birthday,
            Death = actorFromDb.Death,
            Biography = actorFromDb.Biography,
            ShowCharacters = actorFromDb.ShowCharacters,
            ShowList = actorFromDb.ShowCharacters.Select(showchar => showchar.Show.Title).ToList()
        };

        return actor;
    }
}