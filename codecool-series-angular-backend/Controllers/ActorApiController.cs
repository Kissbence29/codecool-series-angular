using codecool_series_angular_backend.DAL;
using codecool_series_angular_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace codecool_series_angular_backend.Controllers;

[Route("[controller]")]
[ApiController]
public class ActorApiController : ControllerBase
{
    private IActorService _actorService;

    public ActorApiController(IActorService actorService)
    {
        _actorService = actorService;
    }

    [HttpGet("{actorName}")]
    public async Task<ActorViewModel> GetActorByName(string actorName)
    {
        return await _actorService.GetActorByName(actorName);
    }
}