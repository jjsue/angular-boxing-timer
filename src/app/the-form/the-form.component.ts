import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-form',
  templateUrl: './the-form.component.html',
  styleUrls: ['./the-form.component.css']
})
export class TheFormComponent implements OnInit {

  minutes: number = 0;
  seconds: number = 0;
  rounds: number = 0;
  rest: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
  }

  timeSubmit(){
    console.log("Hi");
  }

}
