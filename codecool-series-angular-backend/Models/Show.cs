namespace codecool_series_angular_backend.Models
{
    public class Show : ShowBaseModel
    {
        public virtual ICollection<ShowGenre> ShowGenres { get; set; }
    }
}
