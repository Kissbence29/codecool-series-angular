using System.Text.Json.Serialization;

namespace codecool_series_angular_backend.Models
{
    public partial class ShowCharacter
    {
        public int Id { get; set; }
        public int ShowId { get; set; }
        public int ActorId { get; set; }
        public string CharacterName { get; set; } = null!;

        [JsonIgnore]
        public virtual Actor Actor { get; set; } = null!;
        [JsonIgnore]
        public virtual Show Show { get; set; } = null!;
    }
}
