import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../Services/series.service';
import { Show } from '../Models/Show';
import { Genre } from '../Models/Genre';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  public shows: Show[] = [];
  private baseShows: Show[] = [];
  p: number = 1;
  count: number = 9;
  public genres: Genre[] = [];
  private selectedGenre: string = "";
  private sortedShow: Show[] = [];
  constructor(private seriesService: SeriesService) {
  }

  onChange(event: Event) {
    var input = (event.target as HTMLInputElement).value;
    if (this.selectedGenre == "" && input == "") {
      this.shows = this.baseShows;
    }
    else if ((this.selectedGenre !== "" && input == "") || (this.selectedGenre !== "" && input !== "")) {
      this.shows = this.sortedShow;
    }

    else if (this.selectedGenre == "" && input != "") {
      this.shows = this.baseShows;
    }
    this.filterByTitle(input);
  }

  private filterByTitle(input: string) {
    this.shows = this.shows.filter(show => show.title?.toLowerCase().includes(input));
  }

  ngOnInit(): void {
    this.getShows();
    this.getGenres();

  }

  getShows() {
    this.seriesService.getAllShows().subscribe(result => {
      this.shows = result;
      this.baseShows = this.shows;
    }
    )
  }

  getGenres() {
    this.seriesService.getAllGenre().subscribe(result => {
      this.genres = result as Genre[];
    }
    );
  }

  selectGenre(eventData:{genre:string}) {
    this.selectedGenre = eventData.genre;
    this.filterShowsByGenre();
    console.log(this.selectedGenre);
  }

  filterShowsByGenre() {
    if (this.selectedGenre == "") {
      this.shows = this.baseShows;
    }
    else {
      this.shows = [];
      this.sortedShow = [];
      for (let show of this.baseShows) {
        if (show.showGenres?.includes(this.selectedGenre)) {
          this.shows.push(show);
          this.sortedShow.push(show);
        }
      }
      console.log(this.sortedShow.length)
    }
  }
}


