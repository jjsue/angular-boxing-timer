import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeData:object = [1,1,1,1];
  @Input() parentData = 15
  timerData(evtData: object) {
    this.timeData = evtData;
  }
}
