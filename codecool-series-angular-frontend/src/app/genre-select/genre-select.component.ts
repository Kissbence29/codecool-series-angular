import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from '../Models/Genre';

@Component({
  selector: 'genre-select',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.css']
})
export class GenreSelectComponent implements OnInit {

  constructor() { }
  @Input()
  public genres:Genre[]=[];
  genre:string="";
  @Output()
  public selectedGenre = new EventEmitter<{genre:string}>();
  ngOnInit(): void {
  }

  onChange(event:Event)
  {
    this.genre = (event.target as HTMLInputElement).value;
    this.selectedGenre.emit({genre:this.genre})
  }

}
