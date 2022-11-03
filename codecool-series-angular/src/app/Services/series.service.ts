import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../Models/Show';

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


}
