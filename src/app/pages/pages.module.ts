//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

//pipes
import { ObjToArrayPipe } from '../pipe/objToArray.pipe';

//components

import { CountriesComponent } from '../components/countries/countries.component';
import { ProbabilitiesComponent } from '../components/probabilities/probabilities.component';
import { OddsComponent } from '../components/odds/odds.component';
import { HeadtoheadComponent } from '../components/headtohead/headtohead.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { LineupsComponent } from '../components/lineups/lineups.component';
import { LeaguesComponent } from '../components/leagues/leagues.component';

//pages
import { HomeComponent } from './home/home.component';
import { PronosticosComponent } from './pronosticos/pronosticos.component';
import { FixturesComponent } from '../components/fixtures/fixtures.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    PronosticosComponent,
    FixturesComponent,
    ObjToArrayPipe,
    CountriesComponent,
    ProbabilitiesComponent,
    OddsComponent,
    HeadtoheadComponent,
    LoginComponent,
    RegisterComponent,
    NopagesfoundComponent,
    LineupsComponent,
    BlogComponent,
    ContactComponent,
    MatchDetailComponent,
    LeaguesComponent,
  ],
  exports: [
    HomeComponent,
    PronosticosComponent,
    FixturesComponent,
    ObjToArrayPipe,
    CountriesComponent,
    ProbabilitiesComponent,
    OddsComponent,
    HeadtoheadComponent,
    LoginComponent,
    RegisterComponent,
    NopagesfoundComponent,
    LineupsComponent,
    BlogComponent,
    ContactComponent,
    LeaguesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ],
})
export class PagesModule {}
