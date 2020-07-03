import { Injectable } from '@angular/core';
import { TimeModel } from '../_models/time.model';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly workTimeKey = 'workTimeKey';

  constructor(
    private nativeStorage: NativeStorage
  ) { }

  initaliseStorage() {
    const workTimes: TimeModel[] = [];
    this.nativeStorage.setItem(this.workTimeKey, JSON.stringify(workTimes))
      .then(
        () => console.log('Initalised storage'),
        error => console.error('Error initalising storage', error)
      );
  }

  saveWorkTime(time: TimeModel) {
    this.getSavedWorkTime().then(
      data => {
        if (data) {
          data.push(time);
          this.nativeStorage.setItem(this.workTimeKey, JSON.stringify(data))
            .then(
              () => console.log('Stored item!'),
              error => console.error('Error storing item', error)
            );
        } else {
          console.error('Error storing item data is null')
        }
      },
      error => console.error(error)
    );
  }

  getSavedWorkTime(): Promise<TimeModel[]> {
    return this.nativeStorage.getItem(this.workTimeKey)
      .then(
        data => {
          const savedWorkTime = JSON.parse(data) as TimeModel[];
          savedWorkTime.forEach(time => {
            time.startTime = new Date(time.startTime);
            time.endTime = new Date(time.endTime);
          })
          return savedWorkTime;
        },
        error => {
          console.error(error);
          return [];
        }
      );
  }

  deleteSavedWorkTime() {
    this.nativeStorage.remove(this.workTimeKey);
  }
}
