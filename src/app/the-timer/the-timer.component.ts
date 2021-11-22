import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-timer',
  templateUrl: './the-timer.component.html',
  styleUrls: ['./the-timer.component.css']
})
export class TheTimerComponent implements OnInit {

  timerMinutes:number = 0;
  timerSeconds:number = 0;
  timerRest:number = 0;
  totalRounds: number = 0;
  currentRound: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
