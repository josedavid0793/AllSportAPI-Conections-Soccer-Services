import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';

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
  moreDetail: string = 'Más detalles';
  showHidden = false;
  constructor(private soccerService: SoccerService) {}

  ngOnInit(): void {
    this.soccerService.getFixtures().subscribe((data) => {
      this.fixtures = data.result;
      console.log(this.fixtures);
    });
  }

  HiddenDetail() {
    if (this.showHidden) {
      this.showHidden = false;
      this.moreDetail = 'Más detalles';
    } else {
      this.showHidden = true;
      this.moreDetail = 'Menos detalles';
    }
  }
  showDetailFixture(matchId: string) {
    this.soccerService.getFixturesId(matchId).subscribe((data) => {
      this.eventchosen = data.result;
      console.log('mensahjejejjejeje' + this.eventchosen);

    });
  }
  timeMatch() {
    this.time = '2nd Half';
  }
}
