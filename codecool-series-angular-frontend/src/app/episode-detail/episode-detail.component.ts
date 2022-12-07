import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../Models/Episode';
import { SeriesService } from '../Services/series.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {

  constructor(private _seriesService:SeriesService,private route:ActivatedRoute) { }
  private showId:string="";
  public seasonNumber:string ="";
  private episodeId:string = "";
  public episode:Episode={};
  ngOnInit(): void {

    this.showId = this.route.snapshot.params['showId'];
    this.seasonNumber = this.route.snapshot.params['seasonNumber'];
    this.episodeId = this.route.snapshot.params['episodeId'];
    this.getEpisodeByEpisodeId(this.showId,this.seasonNumber,this.episodeId);
  }

  getEpisodeByEpisodeId(showId:string,seasonNumber:string,episodeId:string)
  {
    
    this._seriesService.getEpisodeByEpisodeId(showId,seasonNumber,episodeId).subscribe(result=>
      {
        this.episode = result as Episode;
      },error=>console.error(error));
      
  }

}
