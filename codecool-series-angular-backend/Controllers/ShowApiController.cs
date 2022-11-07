using codecool_series_angular_backend.DAL;
using codecool_series_angular_backend.Models;
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
    public async Task<List<ShowViewModel>> GetTopHundred()
    {
        return await _showService.GetTopHundredShow();
    }
}