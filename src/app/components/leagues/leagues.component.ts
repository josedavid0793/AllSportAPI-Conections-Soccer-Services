import { Component, OnInit } from '@angular/core';
import { Leagues } from 'src/app/interfaces/leagues';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.sass']
})
export class LeaguesComponent implements OnInit {

  leagues: Leagues[]=[];
  showHidden = false;
  //result:any;
  //league_key:any;

  constructor(private soccerService: SoccerService) { }



  ngOnInit(): void {
    //debugger;
    this.soccerService.getLeagues().subscribe(data=>{
      this.leagues=data.result;
      //console.log(this.leagues+this.league_key)
  });

  }
  HiddenLeague(){
    this.showHidden=!this.showHidden;
     }
}
