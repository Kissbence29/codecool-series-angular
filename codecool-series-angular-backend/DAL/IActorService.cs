using codecool_series_angular_backend.Models.ViewModels;

namespace codecool_series_angular_backend.DAL;

public interface IActorService
{
    Task<ActorViewModel> GetActorByName(string actorName);
}