import { Injectable, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { TimeModel } from '../_models/time.model';
import { timeDataDummy, TIME_2, TIME_1, TIME_3, TIME_4, TIME_5, TIME_6, TIME_7, TIME_8, TIME_9, TIME_14, TIME_10, TIME_11, TIME_12, TIME_13, } from '../_data/time.data';
import { SettingsService } from '../_settings/settings.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService implements OnInit {

  constructor(
    private settingsService: SettingsService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
  }

  /**
   * GET
   */
  getToday(): Observable<TimeModel[]> {
    return this.settingsService.getDummyDataValue() ? of([TIME_1, TIME_2, TIME_3, TIME_4, TIME_5, TIME_6, TIME_7, TIME_8, TIME_9, TIME_10, TIME_11, TIME_12, TIME_13, TIME_14]) : from(this.storageService.getSavedWorkTime());
  }

  /**
   * CREATE
   */
  createTime(time: TimeModel): Observable<TimeModel> {
    timeDataDummy.push(time);
    this.storageService.saveWorkTime(time);
    this.storageService.getSavedWorkTime();
    return of(time);
  }
}
