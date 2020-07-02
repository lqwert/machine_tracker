import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TimeService, TimeModel } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from 'src/app/shared/_settings/settings.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  timeDay: TimeModel[];

  constructor(
    private timeService: TimeService,
    public activeRoute: ActivatedRoute,
    private settingsService: SettingsService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      this.getWorkToday();
    })
  }

  getWorkToday() {
    this.timeService.getToday().subscribe(res => {
      console.log(res);
      this.timeDay = res;   
      this.ref.detectChanges();   
    })
  }

}
