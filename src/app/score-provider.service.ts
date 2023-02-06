import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from '../app/models/score-model';

@Injectable({
  providedIn: 'root'
})
export class ScoreProviderService {
  private scoreURL1 = "https://6861-104-196-196-195.ngrok.io/getscore?id=";
  private rangeURL1 = "https://6861-104-196-196-195.ngrok.io/getrange?min=";
  private rangeURL2 = "&max=";
  constructor(public http: HttpClient) {

   }
   getScore(studentid: number) {
    return this.http.get<Score>(this.scoreURL1+studentid, {headers: { 'ngrok-skip-browser-warning': 'any value is fine'}});
   }

   getRange(lower: any, upper: any) {
    return this.http.get<Score>(this.rangeURL1+lower+this.rangeURL2+upper, {headers: { 'ngrok-skip-browser-warning': 'any value is fine'}});
   }
}
