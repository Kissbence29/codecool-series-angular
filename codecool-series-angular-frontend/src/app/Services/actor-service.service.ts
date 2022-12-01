import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor } from '../Models/Actor';


const backendUri:string = "http://localhost:7206";
@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  constructor(private http:HttpClient) { }

  getActorByName(actorName:string){
    var url = `${backendUri}/actorapi/${actorName}`;
     return this.http.get<Actor>(url);
  }
}
