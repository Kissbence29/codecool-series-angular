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
const routes: Routes = [
  { path: 'series', component: SeriesComponent },
  { path: '', redirectTo: '/series', pathMatch: 'full' },
  { path: 'series/:showId', component: SeriesDetailComponent },
  {path:'actor/:actorName',component:ActorPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,SeriesComponent, SeriesDetailComponent,SafePipe, ActorPageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes),NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
