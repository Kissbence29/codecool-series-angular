import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../series/series.component';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  private showId:string="";
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  public show:Show={};
 
  ngOnInit(): void {
   this.showId= this.route.snapshot.params['showId'];
    this.fetchData(this.showId);
    
  }

  fetchData(showId:string):any{
    return this.http.get<Show>(`/showapi/shows/${showId}`).subscribe(result => {
      this.show = result as Show;
      this.show.trailer = this.show.trailer?.replace("http","https").replace("watch?v=","embed/");
    }, error => console.error(error));
  }

}
