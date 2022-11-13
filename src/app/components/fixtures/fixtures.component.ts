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
  moreDetail:string[]= [];
  showHidden:boolean[] = [];
  constructor(private soccerService: SoccerService) {}

  ngOnInit(): void {
    this.soccerService.getFixtures().subscribe((data) => {
      this.fixtures = data.result;
      this.fixtures.forEach(() => {
        this.showHidden.push(false)
        this.moreDetail.push('Más Detalles')
      });
    });
  }

  HiddenDetail(index:number) {
    if (this.showHidden[index]) {
      this.showHidden[index] = false;
      this.moreDetail[index] = 'Más detalles';
    } else {
      this.showHidden[index] = true;
      this.moreDetail[index] = 'Menos detalles';
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
