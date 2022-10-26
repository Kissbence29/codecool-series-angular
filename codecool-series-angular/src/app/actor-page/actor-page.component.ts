import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css']
})
export class ActorPageComponent implements OnInit {
  public actor:any={};
  private actorName:string ="";
  private url:string=""; 
  constructor(private http:HttpClient,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.actorName= this.route.snapshot.params['actorName'];
     this.fetchData(this.actorName);
     
   }
 
   fetchData(actorName:string):any{
    this.url = `/actorapi/${actorName}`;
     return this.http.get(this.url).subscribe(result => {
       this.actor = result;
     }, error => console.error(error));
   }

   nobio():boolean{
    return this.actor.biography!=="";
   }
}
