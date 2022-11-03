import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../Services/series.service';
import { Show } from '../Models/Show';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public shows: Show[] = [];
  private baseShows: Show[] = [];
  p: number = 1;
  count: number = 9;
  constructor(private seriesService: SeriesService,private router: Router) {
  }

  onChange(event: Event) {
    this.shows = this.baseShows;
    this.shows = this.shows.filter((show: Show) => show.title?.toLowerCase().includes((event.target as HTMLInputElement).value))

    if ((event.target as HTMLInputElement).value === '') {
      this.shows = this.baseShows;

    }
  }

  navToSerDetail(page: any): void {
    this.router.navigate(["/series", page])
  }

  ngOnInit(): void {
    this.seriesService.getAllShows().subscribe(result => {
      this.shows = result;
      this.baseShows = this.shows;
    })

  }


  

}


