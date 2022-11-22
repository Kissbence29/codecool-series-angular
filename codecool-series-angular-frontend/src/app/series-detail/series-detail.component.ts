import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Show } from '../Models/Show';
import { SeriesService } from '../Services/series.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  private showId: string = "";
  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }
  public show: Show = {};

  ngOnInit(): void {
    this.showId = this.route.snapshot.params['showId'];
    this.getShow();
  }

  getShow(){
    this.seriesService.getShowbyId(this.showId).subscribe(result => {
      this.show = result as Show;
      this.show.trailer = this.show.trailer?.replace("http", "https").replace("watch?v=", "embed/");
    }, error => console.error(error));
  }
}
