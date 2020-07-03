import { Component, OnInit, Input } from '@angular/core';
import { TimeModel } from 'src/app/shared';
import { OverviewDayModel } from './overview-day.model';

@Component({
  selector: 'app-overview-day',
  templateUrl: './overview-day.component.html',
  styleUrls: ['./overview-day.component.scss'],
})
export class OverviewDayComponent implements OnInit {

  // @Input() timeDay: TimeModel[];
  @Input() set _timeDay(_timeDay: TimeModel[]) {
    if (_timeDay) {
      this.timeDay = _timeDay;
      this.initalTimeList();
      this.setupColors();
    }
  }

  timeDay: TimeModel[];
  timeList: OverviewDayModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  initalTimeList() {
    // Each Minute is a div && represents a machine/color
    this.timeList = [];
    for (var _i = 0; _i < 720; _i++) {
      const startTime = new Date(Date.UTC(96, 1, 2, 7, _i, 0));
      const endTime = new Date(Date.UTC(96, 1, 2, 7, (_i + 1), 0));
      const minutes = startTime.getMinutes() < 10 ? `0${startTime.getMinutes()}` : startTime.getMinutes();
      const title = `${startTime.getHours()}:${minutes}`;
      this.timeList.push(new OverviewDayModel(title, startTime, endTime, 5));
    }
  }

  setColors(_workNow: TimeModel, _nextWork?: TimeModel) {
    let workNow = _workNow;
    // let nextWork = _nextWork

    for (var _i = 0; _i < this.timeList.length; _i++) {
      // for (let time of this.timeList) {
      // LIST ITEM
      let startTimeMinutes = (this.timeList[_i].startTime.getHours() * 60) + this.timeList[_i].startTime.getMinutes();
      let endTimeMinutes = (this.timeList[_i].endTime.getHours() * 60) + this.timeList[_i].endTime.getMinutes();
      // WORK NOW
      let startWorkMinutes = (workNow.startTime.getHours() * 60) + workNow.startTime.getMinutes();
      let endWorkMinutes = (workNow.endTime.getHours() * 60) + workNow.endTime.getMinutes();
      // WORK NEXT
      // let startNextWorkMinutes  = nextWork ? (nextWork.startTime.getHours() * 60) + nextWork.startTime.getMinutes() : null;
      // let endNextWorkMinutes    = nextWork ? (nextWork.endTime.getHours() * 60) + nextWork.endTime.getMinutes() : null;

      if (startTimeMinutes === startWorkMinutes) {
        this.timeList[_i].color = workNow.machine.color;
        while (endWorkMinutes > endTimeMinutes) {
          console.log(this.timeList[_i].startTime, workNow.startTime, workNow.endTime, this.timeList[_i].endTime);
          _i++;
          endTimeMinutes = (this.timeList[_i].endTime.getHours() * 60) + this.timeList[_i].endTime.getMinutes();
          this.timeList[_i].color = workNow.machine.color;
          if (_i % 15 == 14 && this.timeList[_i - 7].color == workNow.machine.color) this.timeList[_i - 8].machineName = workNow.machine.name;
        }
        if (0 == this.timeDay.length) return
        _i--;
        workNow = this.timeDay.splice(0, 1)[0];
      }
    }
  }

  setupColors() {
    if (this.timeDay.length >= 1) {
      const workNow = this.timeDay.splice(0, 1)[0];
      this.setColors(workNow);
    } else {
      return;
    }
  }

}
