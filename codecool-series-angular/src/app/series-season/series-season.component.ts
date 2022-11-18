import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season } from '../Models/Season';
import { SeriesService } from '../Services/series.service';


@Component({
  selector: 'app-series-season',
  templateUrl: './series-season.component.html',
  styleUrls: ['./series-season.component.css']
})
export class SeriesSeasonComponent implements OnInit {

  constructor(private route:ActivatedRoute,private seriesService:SeriesService) { }
  seasons:Season[]=[];
  baseSeasons:Season[]=[];
  showId:string='';
  @Input()
  seasonNumber:number=0;
  selectedSeason:Season={};
  
  ngOnInit(): void
  { 
    this.showId = this.route.snapshot.params['showId'];
    this.getSeasonsByShowid(this.showId);
    }

  getSeasonsByShowid(showId:string)
  {
    this.seriesService.getSeasonsByShowId(showId).subscribe(result=>
      {
        this.seasons = result as Season[];
        this.baseSeasons = result as Season[];
        console.log(result);
        this.selectedSeason=this.seasons.find(season=>season.seasonNumber==this.seasonNumber) as Season;
      },error=>console.error(error));
      
  }

  selectSeason(seasonNumber:Event)
  {
      this.seasonNumber = +(seasonNumber.target as HTMLInputElement).value;
      this.getSeasonBySeasonNumber(this.seasonNumber);
  }

  getSeasonBySeasonNumber(seasonNumber:number)
  {
    this.selectedSeason = this.seasons.find(season=>season.seasonNumber==seasonNumber ) as Season;
  }

  isSeason()
  {
   return this.selectedSeason!==undefined&&this.baseSeasons.length!==0;
  }
}
