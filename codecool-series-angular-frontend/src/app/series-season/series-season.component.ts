import {  AfterViewChecked, Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season } from '../Models/Season';
import { SeriesService } from '../Services/series.service';


@Component({
  selector: 'app-series-season',
  templateUrl: './series-season.component.html',
  styleUrls: ['./series-season.component.css']
})
export class SeriesSeasonComponent implements OnInit,AfterViewChecked {
  private button!: HTMLElement;
  constructor(private route:ActivatedRoute,private seriesService:SeriesService) { }
  ngAfterViewChecked(): void {
   this.button =  (document.querySelector("button")as HTMLElement);
   if(this.button.innerText.split(" ")[1]==="1"){this.button.classList.add("focused")};
   if(this.button.classList.contains("notagain")){this.button.classList.remove("focused")};
  }
  seasons:Season[]=[];
  showId:string='';
  @Input()
  seasonNumber:number=1;
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
      
        this.getSeasonBySeasonNumber(this.seasonNumber);
      },error=>console.error(error));
      
  }

  selectSeason(seasonNumber:Event)
  {
      this.button.classList.remove("focused");
      this.button.classList.add("notagain");
      this.seasonNumber = +(seasonNumber.target as HTMLInputElement).value;
      this.getSeasonBySeasonNumber(this.seasonNumber);
      
  }

  getSeasonBySeasonNumber(seasonNumber:number)
  {
    this.selectedSeason = this.seasons.find(season=>season.seasonNumber==seasonNumber ) as Season;
  }

  isSeason()
  {
   return this.selectedSeason!==undefined;
  }
}
