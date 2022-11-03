import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.css']
})
export class SeriesCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.show=this.show.show;
  }

  @Input()
  show:any;

  

}
