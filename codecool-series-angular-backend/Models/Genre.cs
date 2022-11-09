using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models;

public class Genre
{
    public Genre()
    {
        ShowGenres = new HashSet<ShowGenre>();
    }

    public int Id { get; set; }
    public string Name { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<ShowGenre> ShowGenres { get; set; }
}