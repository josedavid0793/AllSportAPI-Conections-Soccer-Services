import { Component, OnInit } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.sass']
})
export class OddsComponent implements OnInit {
  odds:any;

  constructor(private soccerService : SoccerService ) { }

  ngOnInit(): void {
    this.soccerService.getOdds().subscribe((data)=>{
this.odds=data.result;
console.log(this.odds);
    });
  }



}
