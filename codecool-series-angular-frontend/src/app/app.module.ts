import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipe } from './safe.pipe';
import { ActorPageComponent } from './actor-page/actor-page.component';
import { SeriesCardComponent } from './series-card/series-card.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { GenreSelectComponent } from './genre-select/genre-select.component';
import { SeriesSeasonComponent } from './series-season/series-season.component';
import { FormsModule } from '@angular/forms';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
const routes: Routes = [
  {path:'seasons/:showId/:seasonNumber/:episodeId',pathMatch:"full",component:EpisodeDetailComponent},
  {path:'seasons/:showId',pathMatch:"full",component:SeriesSeasonComponent},
  {path:'series/top-rated',pathMatch:"full",component:TopRatedComponent},
  { path: 'series',pathMatch:"full", component: SeriesComponent },
  { path: '', redirectTo: '/series', pathMatch: 'full' },
  { path: 'series/:showId', component: SeriesDetailComponent },
  {path:'actor/:actorName',component:ActorPageComponent},
  
  
];
@NgModule({
  declarations: [
    AppComponent,SeriesComponent, SeriesDetailComponent,SafePipe, ActorPageComponent, SeriesCardComponent, TopRatedComponent, GenreSelectComponent,SeriesSeasonComponent, EpisodeDetailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes),NgxPaginationModule,FormsModule,
  ],
  providers: [SeriesCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
