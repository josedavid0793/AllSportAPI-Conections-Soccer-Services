import { Component, OnInit } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-probabilities',
  templateUrl: './probabilities.component.html',
  styleUrls: ['./probabilities.component.sass']
})
export class ProbabilitiesComponent implements OnInit {
  probability:any;

  constructor(private soccerService : SoccerService) { }

  ngOnInit(): void {
    this.soccerService.getProbabilities().subscribe((data) => {
      this.probability = data.result;
      console.log(this.probability);
    });
  }

}
