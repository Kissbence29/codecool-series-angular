import { Component, OnInit } from '@angular/core';
import { Genre } from '../Models/Genre';
import { Show } from '../Models/Show';
import { SeriesService } from '../Services/series.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  public genres: Genre[] = [];
  public shows:Show[]=[];
  public selectedGenre:string = "";
  public baseShows:Show[] = [];
  constructor(private seriesService:SeriesService) { }

  ngOnInit(): void {
    this.getShows();
    this.getGenres();
  }

  private getShows()
  {
    this.seriesService.getTopHundred().subscribe(result=>
    {
        this.shows=result as Show[];
        this.baseShows = result as Show[];

    },error=>console.error(error)
    )
  }

  private getGenres()
  {
    this.seriesService.getAllGenre().subscribe(result=>
      {
        this.genres = result as Genre[];
        this.removeUnneccessaryGenres();
      },error=>console.error(error))

      
  }

  selectGenre(eventdata:{genre:string})
  {
    this.selectedGenre = eventdata.genre;
    this.filterShow();
  }

  filterShow()
  {
      if(this.selectedGenre=="")
      {
        this.shows = this.baseShows;
      }
      else
      {
        this.shows = this.baseShows;
        this.shows = this.shows.filter(show=>show.showGenres?.includes(this.selectedGenre));
      }
  }

  removeUnneccessaryGenres()
  {
    var genreArray:Genre[] = [];
    for(var show of this.shows)
    {
      for(var genre of this.genres)
      {
        if(show.showGenres?.includes(genre.name))
        {
          if(genreArray.includes(genre)){
            console.log("What's in the box?");
          }else{
            genreArray.push(genre);
          } 
       }
    }
    
  }
  this.genres = genreArray.sort((a,b)=>a.id-b.id);
  }
}
