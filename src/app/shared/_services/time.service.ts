import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeModel } from '../_models/time.model';
import { timeDataDummy, TIME_2, TIME_1, TIME_3, TIME_4, TIME_5, TIME_6,} from '../_data/time.data';
import { SettingsService } from '../_settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService implements OnInit {

  constructor(
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
  }

  /**
   * GET
   */
  getToday(): Observable<TimeModel[]> {
    return this.settingsService.getDummyDataValue() ? of([TIME_1, TIME_2, TIME_3, TIME_4, TIME_5 ,TIME_6]) : of(timeDataDummy);
    // return of(data);
  }

  /**
   * CREATE
   */
  createTime(time: TimeModel): Observable<TimeModel> {
    timeDataDummy.push(time);
    return of(time);
  }
}
