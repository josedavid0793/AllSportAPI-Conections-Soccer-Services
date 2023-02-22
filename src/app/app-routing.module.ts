import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PronosticosComponent } from './pages/pronosticos/pronosticos.component';
//import { FixturesComponent } from './components/fixtures/fixtures.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { MatchDetailComponent } from './pages/match-detail/match-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:HomeComponent},
  {path:'futbol',component:PronosticosComponent},
  {path:'fixtures/:event_key',component:MatchDetailComponent},
  {path:'blog',component:BlogComponent},
  {path:'contacto',component:ContactComponent},
  {path:'**',component:NopagesfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
