import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../Models/Show';
import { Genre } from '../Models/Genre';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }

  getAllShows():Observable<Show[]>{
    return this.http.get<Show[]>(`/showapi/shows`);
  }

  getShowbyId(id:string):Observable<Show>{
    return this.http.get<Show>(`/showapi/shows/${id}`);
  }

  getTopHundred():Observable<Show[]>
  {
    return this.http.get<Show[]>('/showapi/shows/top-rated');
  }

  getAllGenre():Observable<Genre[]>
  {
    return this.http.get<Genre[]>('showapi/shows/genres');
  }


}
