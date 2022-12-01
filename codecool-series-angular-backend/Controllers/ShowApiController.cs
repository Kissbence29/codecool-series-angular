using codecool_series_angular_backend.DAL;
using codecool_series_angular_backend.Models;
using codecool_series_angular_backend.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace codecool_series_angular_backend.Controllers;

[Route("[controller]")]
[ApiController]
public class ShowApiController : ControllerBase
{
    private IShowService _showService;

    public ShowApiController(IShowService showService)
    {
        _showService = showService;
    }

    [HttpGet("shows")]
    [ResponseCache(Duration = 300, Location = ResponseCacheLocation.None)]
    public async Task<List<ShowViewModel>> GetAllShows()
    {
        return await _showService.GetAllShows();
    }

    [HttpGet("shows/{showId}")]
    public async Task<Show> GetShow(int showId)
    {
        return await _showService.GetShow(showId);
    }

    [HttpGet("shows/top-rated")]
    [ResponseCache(Duration = 300, Location = ResponseCacheLocation.Client)]
    public async Task<List<ShowViewModel>> GetTopHundred()
    {
        return await _showService.GetTopHundredShow();
    }

    [HttpGet("shows/genres")]
    public async Task<List<Genre>> GetAllGenre()
    {
        return await _showService.GetAllGenre();
    }

    [HttpGet("shows/season/{showId}")]
    public async Task<List<Season>> GetSeasonsByShowId(int showId)
    {
        return await _showService.GetAllSeasonsByShowId(showId);
    }
}