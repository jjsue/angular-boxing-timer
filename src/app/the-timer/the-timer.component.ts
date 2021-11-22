import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-the-timer',
  templateUrl: './the-timer.component.html',
  styleUrls: ['./the-timer.component.css']
})
export class TheTimerComponent implements OnInit {

  @Input() timeDataChild:any;

  timerMinutes:number = 0;
  timerSeconds:number = 0;
  timerRest:number = 0;
  totalRounds: number = 0;
  currentRound: number = 1;

  btnText:string="Start";

  btnClick(){
    console.log("btnClick");
  }

  constructor() { }

  ngOnInit(): void {
    this.timerMinutes= this.timeDataChild[0];
    this.timerSeconds= this.timeDataChild[1];
    this.timerRest= this.timeDataChild[2];
    this.totalRounds= this.timeDataChild[3];
  }
  ngOnChanges(){
    this.timerMinutes= this.timeDataChild[0];
    this.timerSeconds= this.timeDataChild[1];
    this.timerRest= this.timeDataChild[2];
    this.totalRounds= this.timeDataChild[3];
  }

}
