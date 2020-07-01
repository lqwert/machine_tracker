import { Component, OnInit, Input } from '@angular/core';
import { TimeModel } from 'src/app/shared';
import { OverviewDayModel } from './overview-day.model';

@Component({
  selector: 'app-overview-day',
  templateUrl: './overview-day.component.html',
  styleUrls: ['./overview-day.component.scss'],
})
export class OverviewDayComponent implements OnInit {

  @Input() timeDay: TimeModel[];

  timeList: OverviewDayModel[] = [];

  constructor() { }

  ngOnInit() {
    this.initalTimeList();
    console.log(this.timeDay);
    this.setupColors();
  }

  initalTimeList() {
    for (var _i = 0; _i < 49; _i++) {
      const startTime = new Date(Date.UTC(96, 1, 2, 7, (_i * 15), 0));
      const endTime = new Date(Date.UTC(96, 1, 2, 7, ((_i + 1) * 15), 0));
      const minutes = startTime.getMinutes() == 0 ? '00' : startTime.getMinutes();
      const title = `${startTime.getHours()}:${minutes}`;
      this.timeList.push(new OverviewDayModel(title, startTime, endTime, 50));
    }
    for (let time of this.timeList) {
      for (var _i = 0; _i < 15; _i++) {
        const testColor = ['#D23F20', '#31A00A', '#0A3AA0']
        time.minuteLines.push(testColor[Math.floor(Math.random() * 3)]);
      }
    }
  }

  setupColors() {
    if (this.timeDay.length == 0) return;
    let work = this.timeDay.splice(0, 1)[0];
    // Activate current color | 0 = first, 1 = between, 2 = last
    let first = true;
    for (let time of this.timeList) {
      // Calc minutes of the day
      const startTimeMinutes = (time.startTime.getHours() * 60) + time.startTime.getMinutes();
      const endTimeMinutes = (time.endTime.getHours() * 60) + time.endTime.getMinutes();
      const startWorkMinutes = (work.startTime.getHours() * 60) + work.startTime.getMinutes();
      const endWorkMinutes = (work.endTime.getHours() * 60) + work.endTime.getMinutes();

      if (!first && endWorkMinutes > endTimeMinutes) {
        console.log('Middle:', startTimeMinutes, startWorkMinutes, endWorkMinutes, endTimeMinutes);
        console.log('Middle:', time.startTime.getMinutes(), work.startTime.getMinutes(), work.endTime.getMinutes(), time.endTime.getMinutes());
        time.color = work.machine.color;
      }
      if (first && startTimeMinutes <= startWorkMinutes && startWorkMinutes < endTimeMinutes) {
        console.log('First:', startTimeMinutes, startWorkMinutes, endWorkMinutes, endTimeMinutes);
        console.log('First:', time.startTime.getMinutes(), work.startTime.getMinutes(), work.endTime.getMinutes(), time.endTime.getMinutes());
        time.color = work.machine.color;
        first = false;
      }
      if (startTimeMinutes < endWorkMinutes && endWorkMinutes <= endTimeMinutes) {
        console.log('Last:', startTimeMinutes, startWorkMinutes, endWorkMinutes, endTimeMinutes);
        console.log('Last:', time.startTime.getMinutes(), work.startTime.getMinutes(), work.endTime.getMinutes(), time.endTime.getMinutes());
        time.color = work.machine.color;
        first = true;
        if (this.timeDay.length == 0) return;
        work = this.timeDay.splice(0, 1)[0];
      }
    }
  }

}
