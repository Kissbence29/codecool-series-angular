import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.css']
})
export class SeriesCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.show = this.show.show;

  }

  @Input()
  show: any;

  navToSerDetail(page: any): void {
    console.log(page);
    this.router.navigate(["/series", page])
  }


}
