using codecool_series_angular_backend.Models;
using codecool_series_angular_backend.Models.ViewModels;

namespace codecool_series_angular_backend.DAL;

public interface IShowService
{
    Task<List<ShowViewModel>> GetAllShows();
    Task<ShowDetailedViewModel> GetShow(int showId);
    Task<List<ShowViewModel>> GetTopHundredShow();
    Task<List<Genre>> GetAllGenre();
}