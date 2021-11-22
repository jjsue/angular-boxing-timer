import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-the-form',
  templateUrl: './the-form.component.html',
  styleUrls: ['./the-form.component.css']
})
export class TheFormComponent implements OnInit {

  @Output() sendToTimer = new EventEmitter<object>();

  minutes: number = 0;
  seconds: number = 0;
  rounds: number = 0;
  rest: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  timeSubmit() {
    this.senderFunction([this.minutes, this.seconds, this.rounds, this.rest]);
  }

  senderFunction(value: object) {
    this.sendToTimer.emit(value);
  }

}
