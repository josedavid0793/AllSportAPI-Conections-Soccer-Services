import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leagues } from '../interfaces/leagues';
import { Countries } from '../interfaces/countries';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoccerService {
  //eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Mzg2OTEwYTRjZDgyMzE1NDc0ZDI5OGEiLCJpYXQiOjE2Njk3NjM0OTEsImV4cCI6MTc2NDM3MTQ5MX0.XVoLc-oUxyyivymjXCabrlFxtGXo0COscuxqX-F9gJE
  key = '2874c815dc21b3c9f3d71bd1bbd2e885fb3ddc0e0c2ff4d34478cde0714a1f6d';
  constructor(private http: HttpClient) {}
  getLeagues(): Observable<any> {
    return this.http.get<Leagues[]>(
      `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${this.key}`
    );
  }
  getFixtures(): Observable<any> {
    return this.http.get(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${this.key}&from=2022-05-18&to=2022-05-18`
    );
  }
  getFixturesId(matchId: string): Observable<any> {
    return this.http.get(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${this.key}&from=2022-05-05&to=2022-05-18&matchId=${matchId}`
    );
  }
  getCountries(): Observable<any> {
    return this.http.get<Countries[]>(
      `https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=${this.key}`
    );
  }
  getProbabilities(): Observable<any> {
    return this.http.get(
      `https://apiv2.allsportsapi.com/football/?met=Probabilities&matchId=86392&APIkey=${this.key}`
    );
  }
  getOdds(): Observable<any> {
    return this.http.get(
      `https://apiv2.allsportsapi.com/football/?&met=Odds&matchId=86392&APIkey=${this.key}`
    );
  }
  getH2H2(firstTeamId:String,secondTeamId:String):Observable<any>{
    return this.http.get(`https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=${this.key}&firstTeamId=${firstTeamId}&secondTeamId=${secondTeamId}`)
  }
  getH2H(): Observable<any> {
    return this.http
      .get(`https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=${this.key}&firstTeamId=
    4294&secondTeamId=4281`);
  }
}
