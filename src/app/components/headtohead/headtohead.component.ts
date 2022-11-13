import { Component, OnInit } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-headtohead',
  templateUrl: './headtohead.component.html',
  styleUrls: ['./headtohead.component.sass']
})
export class HeadtoheadComponent implements OnInit {
headtohead:any;
  constructor(private soccerService : SoccerService) { }

  ngOnInit(): void {
this.getheadtohead()
  }

  getheadtohead(){
    this.soccerService.getH2H().subscribe((data)=>{
this.headtohead=data.result;
console.log(this.headtohead);
    })
  }

}
