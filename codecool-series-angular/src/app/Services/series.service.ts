import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../Models/Show';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }

  getAllShows(){
    return this.http.get<Show[]>(`/showapi/shows`);
  }

  getShowbyId(id:string){
    return this.http.get<Show>(`/showapi/shows/${id}`);
  }


}
