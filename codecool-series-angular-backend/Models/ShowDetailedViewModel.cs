namespace codecool_series_angular_backend.Models;

public class ShowDetailedViewModel : Show
{
    public List<string> GenreList { get; set; }
    public int SeasonNumber { get; set; }
    public List<string?>? ActorList { get; set; }
    public List<string>? CharacterList { get; set; }
}