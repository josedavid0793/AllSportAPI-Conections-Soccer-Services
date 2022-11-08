import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PronosticosComponent } from './components/pronosticos/pronosticos.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'pronosticos',component:PronosticosComponent},
  {path:'fixtures/:event_key',component:FixturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
