import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {

    private defaultMachine = new BehaviorSubject<string>('0');

    private dummyData = new BehaviorSubject<boolean>(true);
    private disableScanner = new BehaviorSubject<boolean>(false);
    private timerSpeed = new BehaviorSubject<boolean>(false);

    constructor() { }

    // DEFAULT MACHINE
    getDefaultMachineValue(): string {
        return this.defaultMachine.value;
    }

    changeDefaultMachine(defaultMachine: string) {
        this.defaultMachine.next(defaultMachine);
    }
    // DUMMY DATA
    getDummyDataValue(): boolean {
        return this.dummyData.value;
    }

    getDummyData(): Observable<boolean> {
        return this.dummyData.asObservable();
    }

    changeDummyData(dummyData: boolean) {
        this.dummyData.next(dummyData);
    }
    // DISABLE SCANNER
    getDisableScannerValue(): boolean {
        return this.disableScanner.value;
    }

    changeDisableScanner(disableScanner: boolean) {
        this.disableScanner.next(disableScanner);
    }
    // TIMER SPEED
    getTimerSpeedValue(): boolean {
        return this.timerSpeed.value;
    }

    changeTimerSpeed(timerSpeed: boolean) {
        this.timerSpeed.next(timerSpeed);
    }

}