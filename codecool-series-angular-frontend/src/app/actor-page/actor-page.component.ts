import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../Models/Actor';
import { ActorServiceService } from '../Services/actor-service.service';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css'],
})
export class ActorPageComponent implements OnInit {
  public actor: Actor;
  private actorName: string = "";
  constructor(private route: ActivatedRoute, private actorService: ActorServiceService) { this.actor = {}; }
  ngOnInit(): void {

    this.actorName = this.route.snapshot.params['actorName'];
    this.actorService.getActorByName(this.actorName).subscribe(actor =>
    {
      this.actor = actor;
    });
  }
  nobio(): boolean {
    return this.actor.biography !== '';
  }

  noCharacterName(showcharacter: string): boolean {
    return showcharacter !== '';
  }

  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };
}
