import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../Services/series.service';
import { Show } from '../Models/Show';
import { SeriesCardComponent } from '../series-card/series-card.component';
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
  constructor(private seriesService: SeriesService,private router: Router,private child:SeriesCardComponent) {
  }

  onChange(event: Event) {
    this.shows = this.baseShows;
    this.shows = this.shows.filter((show: Show) => show.title?.toLowerCase().includes((event.target as HTMLInputElement).value))

    if ((event.target as HTMLInputElement).value === '') {
      this.shows = this.baseShows;

    }
  }

  ngOnInit(): void {
   this.getShows();
    
  }

  getShows() {
    this.seriesService.getAllShows().subscribe(result => {
      this.shows = result;
      this.baseShows = this.shows;
    }
    )
  }

  onClick(page:any){
    this.child.navToSerDetail(page); 
  }


  

}


