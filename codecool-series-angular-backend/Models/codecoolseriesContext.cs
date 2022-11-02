using Microsoft.EntityFrameworkCore;

namespace codecool_series_angular_backend.Models;

public partial class codecoolseriesContext : DbContext
{
    public codecoolseriesContext()
    {
    }

    public codecoolseriesContext(DbContextOptions<codecoolseriesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Actor> Actors { get; set; } = null!;
    public virtual DbSet<Episode> Episodes { get; set; } = null!;
    public virtual DbSet<Genre> Genres { get; set; } = null!;
    public virtual DbSet<Season> Seasons { get; set; } = null!;
    public virtual DbSet<Show> Shows { get; set; } = null!;
    public virtual DbSet<ShowCharacter> ShowCharacters { get; set; } = null!;
    public virtual DbSet<ShowGenre> ShowGenres { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql("Name=ConnectionStrings:codecool-series");
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Actor>(entity =>
        {
            entity.ToTable("actors");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");

            entity.Property(e => e.Biography).HasColumnName("biography");

            entity.Property(e => e.Birthday).HasColumnName("birthday");

            entity.Property(e => e.Death).HasColumnName("death");

            entity.Property(e => e.Name)
                .HasMaxLength(200)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Episode>(entity =>
        {
            entity.ToTable("episodes");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");

            entity.Property(e => e.EpisodeNumber).HasColumnName("episode_number");

            entity.Property(e => e.Overview).HasColumnName("overview");

            entity.Property(e => e.SeasonId).HasColumnName("season_id");

            entity.Property(e => e.Title)
                .HasMaxLength(200)
                .HasColumnName("title");

            entity.HasOne(d => d.Season)
                .WithMany(p => p.Episodes)
                .HasForeignKey(d => d.SeasonId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_episodes_season_id");
        });

        modelBuilder.Entity<Genre>(entity =>
        {
            entity.ToTable("genres");

            entity.Property(e => e.Id).HasColumnName("id");

            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Season>(entity =>
        {
            entity.ToTable("seasons");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");

            entity.Property(e => e.Overview).HasColumnName("overview");

            entity.Property(e => e.SeasonNumber).HasColumnName("season_number");

            entity.Property(e => e.ShowId).HasColumnName("show_id");

            entity.Property(e => e.Title)
                .HasMaxLength(200)
                .HasColumnName("title");

            entity.HasOne(d => d.Show)
                .WithMany(p => p.Seasons)
                .HasForeignKey(d => d.ShowId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_seasons_show_id");
        });

        modelBuilder.Entity<Show>(entity =>
        {
            entity.ToTable("shows");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");

            entity.Property(e => e.Homepage)
                .HasMaxLength(200)
                .HasColumnName("homepage");

            entity.Property(e => e.Overview).HasColumnName("overview");

            entity.Property(e => e.Rating).HasColumnName("rating");

            entity.Property(e => e.Runtime).HasColumnName("runtime");

            entity.Property(e => e.Title)
                .HasMaxLength(200)
                .HasColumnName("title");

            entity.Property(e => e.Trailer)
                .HasMaxLength(200)
                .HasColumnName("trailer");

            entity.Property(e => e.Year).HasColumnName("year");
        });

        modelBuilder.Entity<ShowCharacter>(entity =>
        {
            entity.ToTable("show_characters");

            entity.Property(e => e.Id).HasColumnName("id");

            entity.Property(e => e.ActorId).HasColumnName("actor_id");

            entity.Property(e => e.CharacterName)
                .HasMaxLength(200)
                .HasColumnName("character_name");

            entity.Property(e => e.ShowId).HasColumnName("show_id");

            entity.HasOne(d => d.Actor)
                .WithMany(p => p.ShowCharacters)
                .HasForeignKey(d => d.ActorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_show_characters_actor_id");

            entity.HasOne(d => d.Show)
                .WithMany(p => p.ShowCharacters)
                .HasForeignKey(d => d.ShowId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_show_characters_show_id");
        });

        modelBuilder.Entity<ShowGenre>(entity =>
        {
            entity.ToTable("show_genres");

            entity.Property(e => e.Id).HasColumnName("id");

            entity.Property(e => e.GenreId).HasColumnName("genre_id");

            entity.Property(e => e.ShowId).HasColumnName("show_id");

            entity.HasOne(d => d.Genre)
                .WithMany(p => p.ShowGenres)
                .HasForeignKey(d => d.GenreId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_show_genres_genre_id");

            entity.HasOne(d => d.Show)
                .WithMany(p => p.ShowGenres)
                .HasForeignKey(d => d.ShowId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_show_genres_show_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}