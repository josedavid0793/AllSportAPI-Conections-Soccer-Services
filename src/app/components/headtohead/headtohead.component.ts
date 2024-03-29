import { Component, Input, OnInit, Output } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-headtohead',
  templateUrl: './headtohead.component.html',
  styleUrls: ['./headtohead.component.sass'],
})
export class HeadtoheadComponent implements OnInit {
  headtohead: any = [];
  headtohead2: any = [];
  headtohead3: any = [];
  localteam: string[] = [];
  @Input() firstTeamId!: String;
  @Input() secondTeamId!: String;

  constructor(private soccerService: SoccerService) {}

  ngOnInit(): void {
    this.getheadtohead2(this.firstTeamId, this.secondTeamId);
  }
  getheadtohead() {
    this.soccerService.getH2H().subscribe((data) => {
      this.headtohead = data.result.H2H;
      this.headtohead2 = data.result.firstTeamResults;
      this.headtohead3 = data.result.secondTeamResults;
      console.log(this.headtohead);
    });
  }
  getheadtohead2(firstTeamId: String, secondTeamId: String) {
    this.soccerService.getH2H2(firstTeamId, secondTeamId).subscribe((data) => {
      this.headtohead = data.result.H2H;
      this.headtohead2 = data.result.firstTeamResults;
      this.headtohead3 = data.result.secondTeamResults;
      console.log(this.headtohead);
    });
  }
}
