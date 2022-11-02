using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models;

public class Season
{
    public Season()
    {
        Episodes = new HashSet<Episode>();
    }

    public int Id { get; set; }
    public short SeasonNumber { get; set; }
    public string? Title { get; set; }
    public string? Overview { get; set; }
    public int ShowId { get; set; }
    [JsonIgnore]
    public virtual Show Show { get; set; } = null!;
    public virtual ICollection<Episode> Episodes { get; set; }
}