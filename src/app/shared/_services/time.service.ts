import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeModel } from '../_models/time.model';
import { timeData } from '../_data/time.data';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getToday(): Observable<TimeModel[]> {
    return of(timeData);
  }
}
