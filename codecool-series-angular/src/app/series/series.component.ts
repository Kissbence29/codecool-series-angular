import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public shows: Show[] = [];
  private baseShows: Show[] = [];
  private router: Router;
  private _http: HttpClient;
  p: number = 1;
  count: number = 9;
  constructor(http: HttpClient, router: Router) {
    this._http = http;
    this.router = router;
  }

  onChange(event: Event) {
    this.shows = this.shows.filter((show: Show) => show.title?.toLowerCase().includes((event.target as HTMLInputElement).value))
    console.log((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value === '') {
      this.shows = this.baseShows;

    }
  }

  ngOnInit(): void {
    this.fetchData();

  }

  fetchData(): any {
    return this._http.get<Show[]>(`/showapi/shows`).subscribe(result => {
      this.shows = result as Show[];
      this.baseShows = result;
    }, error => console.error(error));
  }

  navToSerDetail(page: any): void {
    this.router.navigate(["/series", page])
  }

}

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
  seasonNumber?:number;
}
