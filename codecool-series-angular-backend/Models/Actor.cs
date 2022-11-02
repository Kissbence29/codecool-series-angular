using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models;

public class Actor
{
    public Actor()
    {
        ShowCharacters = new HashSet<ShowCharacter>();
    }

    public int Id { get; set; }
    public string Name { get; set; } = null!;
    [JsonConverter(typeof(DateOnlyJsonConverter))]
    public DateOnly? Birthday { get; set; }
    [JsonConverter(typeof(DateOnlyJsonConverter))]
    public DateOnly? Death { get; set; }
    public string? Biography { get; set; }

    public virtual ICollection<ShowCharacter> ShowCharacters { get; set; }
}