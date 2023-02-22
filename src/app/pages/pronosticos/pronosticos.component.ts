import { Component, OnInit } from '@angular/core';
import { Leagues } from 'src/app/interfaces/leagues';
import { SoccerService } from 'src/app/services/soccer.service';

@Component({
  selector: 'app-pronosticos',
  templateUrl: './pronosticos.component.html',
  styleUrls: ['./pronosticos.component.sass']
})
export class PronosticosComponent implements OnInit {


  constructor(private soccerService: SoccerService) { }



  ngOnInit(): void {


  }


}
