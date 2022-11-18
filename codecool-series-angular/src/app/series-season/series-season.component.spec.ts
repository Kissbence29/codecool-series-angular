import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSeasonComponent } from './series-season.component';

describe('SeriesSeasonComponent', () => {
  let component: SeriesSeasonComponent;
  let fixture: ComponentFixture<SeriesSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
