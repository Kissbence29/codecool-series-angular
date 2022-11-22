export interface Show {
    id?: number,
    title?: string,
    year?: Date,
    overview?: string,
    showGenres?: string[],
    actorList?: string[],
    runtime?: number
    trailer?: string;
    characterList?: string[];
    genreList?: string[];
    seasonNumber?: number;
  }