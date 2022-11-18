using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models;

public class Episode
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public short EpisodeNumber { get; set; }
    public string? Overview { get; set; }
    public int SeasonId { get; set; }
    [JsonIgnore]
    public virtual Season Season { get; set; } = null!;
}