import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../../app/models/score-model'
import { ScoreProviderService } from '../score-provider.service';
import { initialize } from "@ionic/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public score$: Observable<Score> | undefined;
  public range$: Observable<Score> | undefined;
  public upper!: number;
  public lower!: number;
  public studentid!: number;
  constructor(private scoreProvider: ScoreProviderService) {
  }

  showScore(sc: number) {
  this.score$=this.scoreProvider.getScore(sc);
  }
  showRange(sl:any, su:any){
  this.range$=this.scoreProvider.getRange(sl,su);
  }
}
