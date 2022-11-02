using codecool_series_angular_backend.Models;

namespace codecool_series_angular_backend.DAL;

public interface IShowService
{
    Task<List<ShowViewModel>> GetAllShows();
    Task<ShowDetailedViewModel> GetShow(int showId);
}