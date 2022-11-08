import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/interfaces/countries';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass'],
})
export class CountriesComponent implements OnInit {
  countries: Countries[] = [];
  showHidden = false;
  constructor(private soccerService: SoccerService) {}

  ngOnInit(): void {
    this.soccerService.getCountries().subscribe((data) => {
      this.countries = data.result;
      console.log(this.countries);
    });
  }
  HiddenCountry(){
 this.showHidden=!this.showHidden;
  }
}
