import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';
import { HeadtoheadComponent } from '../headtohead/headtohead.component';
import { MatchDetailComponent } from 'src/app/pages/match-detail/match-detail.component';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.sass'],
})
export class FixturesComponent implements OnInit {
  fixtures: any;
  eventchosen: any;
  matchId: any;
  time: string = '1st Half';
  @Output() closed = new EventEmitter();
  headtohead: any = [];
  headtohead2: any = [];
  headtohead3: any = [];
  firstTeamId: string = '';
  secondTeamId: string = '';
  moreDetail: string[] = [];
  showHidden: boolean[] = [];
  hiddenh2h: boolean[] = [];
  hiddenlineup: boolean = true;
  constructor(private soccerService: SoccerService) {}

  ngOnInit(): void {
    this.soccerService.getFixtures().subscribe((data) => {
      this.fixtures = data.result;
      this.fixtures.forEach(() => {
        this.showHidden.push(false);
        this.moreDetail.push('Más Detalles');
      });
    });
  }

  HiddenDetail(index: number) {
    if (this.showHidden[index]) {
      this.showHidden[index] = false;
      this.moreDetail[index] = 'Más detalles';
    } else {
      this.showHidden[index] = true;
      this.moreDetail[index] = 'Menos detalles';
    }
  }
  hiddenH2H(index: number) {
    if (this.hiddenh2h[index]) {
      this.hiddenh2h[index] = false;
    } else {
      this.hiddenh2h[index] = true;
    }
  }
  hiddenLineups() {
    this.hiddenlineup = !this.hiddenlineup;
  }
  showDetailFixture(matchId: string) {
    this.soccerService.getFixturesId(matchId).subscribe((data) => {
      this.eventchosen = data.result;
    });
  }
  timeMatch() {
    this.time = '2nd Half';
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
