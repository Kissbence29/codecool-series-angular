using codecool_series_angular_backend.Models;

namespace codecool_series_angular_backend.DAL
{
    public interface IActorService
    {
        Task<Actor> GetActorByName(string actorName);
    }
}
