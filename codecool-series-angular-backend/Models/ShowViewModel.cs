using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models
{
    public class ShowViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Overview { get; set; }
        [JsonConverter(typeof(DateOnlyJsonConverter))]
        public DateOnly? Year { get; set; }
        public short? Runtime { get; set; }
        public List<string?>? ShowGenres { get; set; }
        public List<string?>? ActorList { get; set; }
    }
}
