import { Component, OnInit } from '@angular/core';
import { Show } from '../Models/Show';
import { SeriesCardComponent } from '../series-card/series-card.component';
import { SeriesService } from '../Services/series.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  public shows:Show[]=[];
  constructor(private seriesService:SeriesService) { }

  ngOnInit(): void {
    this.getShows();
  }

  private getShows()
  {
    this.seriesService.getTopHundred().subscribe(result=>
    {
        this.shows=result as Show[];

    },error=>console.error(error)
    )
  }

}
