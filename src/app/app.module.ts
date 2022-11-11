import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PronosticosComponent } from './components/pronosticos/pronosticos.component';
import { ObjToArrayPipe } from './pipe/objToArray.pipe';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ProbabilitiesComponent } from './components/probabilities/probabilities.component';
import { OddsComponent } from './components/odds/odds.component';
import { HeadToheadComponent } from './component/head-tohead/head-tohead.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PronosticosComponent,
    ObjToArrayPipe,
    FixturesComponent,
    CountriesComponent,
    ProbabilitiesComponent,
    OddsComponent,
    HeadToheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
