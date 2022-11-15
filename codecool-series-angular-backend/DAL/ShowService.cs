using codecool_series_angular_backend.Models;
using codecool_series_angular_backend.Models.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace codecool_series_angular_backend.DAL;

public class ShowService : IShowService
    {
        private codecoolseriesContext _context;

        public ShowService(codecoolseriesContext context)
        {
            _context = context;
        }

        public async Task<List<ShowViewModel>> GetAllShows()
        {
            var showsFromDB = await _context.Shows.

                Include(show => show.Seasons).
                Include(show => show.ShowGenres).
                ThenInclude(genre => genre.Genre).
                Include(show => show.ShowCharacters).
                ThenInclude(character => character.Actor).
                OrderBy(show => show.Title).
                AsNoTracking().
                ToListAsync();

            return showsFromDB.Select(show => new ShowViewModel
            {
                Id = show.Id,
                Title = show.Title,
                Year = show.Year,
                Overview = show.Overview,
                ShowGenres = show.ShowGenres?.Select(genre => genre?.Genre?.Name)?.ToList(),
                ActorList = show.ShowCharacters?.Select(character => character?.Actor?.Name)?.ToList(),
                Runtime = show.Runtime
            })
                .ToList();
        }

        public async Task<ShowDetailedViewModel> GetShow(int showId)
        {
            var showFromDb = await _context.Shows.Where(show => show.Id == showId)
                .Include(show => show.Seasons)
                .Include(show => show.ShowGenres)
                .ThenInclude(genre => genre.Genre)
                .Include(show => show.ShowCharacters)
                .ThenInclude(character => character.Actor)
                .AsNoTracking()
                .OrderBy(show => show.Title).AsNoTracking()
                .FirstAsync();

            var show = new ShowDetailedViewModel
            {
                Id = showFromDb.Id,
                Title = showFromDb.Title,
                Year = showFromDb.Year,
                Overview = showFromDb.Overview,
                Runtime = showFromDb.Runtime,
                Trailer = showFromDb.Trailer,
                Homepage = showFromDb.Homepage,
                Rating = showFromDb.Rating,
                Seasons = showFromDb.Seasons,
                ShowCharacters = showFromDb.ShowCharacters,
                ShowGenres = showFromDb.ShowGenres,
                GenreList = showFromDb.ShowGenres.Select(genre => genre.Genre.Name)
                    .ToList(),
                SeasonNumber = showFromDb.Seasons.Count,
                ActorList = showFromDb.ShowCharacters?.Where(charac => charac.CharacterName != "")?.Select(character => character?.Actor?.Name)
                    ?.ToList(),
                CharacterList = showFromDb.ShowCharacters?.Select(character => character.CharacterName).ToList(),
            };
            return show;
        }

        public async Task<List<ShowViewModel>> GetTopHundredShow()
        {
        var showsFromDB = await _context.Shows.
            Include(show => show.Seasons).
            Include(show => show.ShowGenres).
            ThenInclude(genre => genre.Genre).
            Include(show => show.ShowCharacters).
            ThenInclude(character => character.Actor).
            OrderByDescending(show => show.Rating).
            Take(100).
            AsNoTracking().
            ToListAsync();

        return showsFromDB.Select(show => new ShowViewModel
            {
                Id = show.Id,
                Title = show.Title,
                Year = show.Year,
                Overview = show.Overview,
                ShowGenres = show.ShowGenres?.Select(genre => genre?.Genre?.Name)?.ToList(),
                ActorList = show.ShowCharacters?.Select(character => character?.Actor?.Name)?.ToList(),
                Runtime = show.Runtime,
                Rating = show.Rating
            })
            .ToList();
    }

        public async Task<List<Genre>> GetAllGenre()
        {
            return await _context.Genres.Where(genre=>genre.ShowGenres.Count!=0).AsNoTracking().ToListAsync();
        }
    }

