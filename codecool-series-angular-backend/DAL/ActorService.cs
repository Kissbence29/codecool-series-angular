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

    public async Task<Actor> GetActorByName(string actorName)
    {
        return await _context.Actors
            .Include(actor => actor.ShowCharacters)
            .Where(actor => actor.Name == actorName)
            .FirstAsync();
    }
}