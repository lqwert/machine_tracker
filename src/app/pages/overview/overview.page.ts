import { Component, OnInit } from '@angular/core';
import { TimeService, TimeModel } from 'src/app/shared';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  timeDay: TimeModel[];

  constructor(
    private timeService: TimeService
  ) { }

  ngOnInit() {
    this.timeService.getToday().subscribe(res => {
      this.timeDay = res;
      console.log(this.timeDay);
    })
  }

}
