import { Component, OnInit, Output } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-headtohead',
  templateUrl: './headtohead.component.html',
  styleUrls: ['./headtohead.component.sass']
})
export class HeadtoheadComponent implements OnInit {
headtohead:any=[];
headtohead2:any=[];
headtohead3:any=[];
firstTeamId:any;
secondTeamId:any;
localteam: string[]=[];
//@Output() headtoheadparams=this.getheadtohead(this.headtohead2.home_team_key,this.headtohead2.away_team_key);

  constructor(private soccerService : SoccerService) { }

  ngOnInit(): void {
    this.getheadtohead()

  }
  getheadtohead(){
    this.soccerService.getH2H().subscribe((data)=>{

this.headtohead=data.result.H2H;
this.headtohead2=data.result.firstTeamResults;
this.headtohead3=data.result.secondTeamResults;
console.log(this.headtohead);
/*this.headtohead2.forEach(()=>{
  this.headtohead2.event_home_team=this.localteam;
console.log(this.localteam);
})*/

}
)}
getheadtohead2(firstTeamId:String,secondTeamId:String){
    this.soccerService.getH2H2(firstTeamId,secondTeamId).subscribe((data)=>{

this.headtohead=data.result.H2H;
this.headtohead2=data.result.firstTeamResults;
this.headtohead3=data.result.secondTeamResults;
console.log(this.headtohead);

/*this.headtohead2.forEach(()=>{
this.headtohead2.event_home_team;
console.log(this.headtohead2.event_home_team);
})*/
    })
  }

}
