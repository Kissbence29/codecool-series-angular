namespace codecool_series_angular_backend.Models;

public class ShowGenre
{
    public int Id { get; set; }
    public int ShowId { get; set; }
    public int GenreId { get; set; }

    public virtual Genre Genre { get; set; } = null!;
    public virtual Show Show { get; set; } = null!;
}