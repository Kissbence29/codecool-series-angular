using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models;

public class ShowBaseModel
{
    public ShowBaseModel()
    {
        Seasons = new HashSet<Season>();
        ShowCharacters = new HashSet<ShowCharacter>();

    }

    public int Id { get; set; }
    public string Title { get; set; } = null!;
    [JsonConverter(typeof(DateOnlyJsonConverter))]
    public DateOnly? Year { get; set; }
    public string? Overview { get; set; }
    public short? Runtime { get; set; }
    public string? Trailer { get; set; }
    public string? Homepage { get; set; }
    public decimal? Rating { get; set; }

    public virtual ICollection<Season> Seasons { get; set; }
    public virtual ICollection<ShowCharacter> ShowCharacters { get; set; }
}