// ANGULAR
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// SCANNER
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { interval, Subscription } from 'rxjs';
import { MachineModel, MachineService, TimeService, TimeModel } from 'src/app/shared';
import { SettingsService } from 'src/app/shared/_settings/settings.service';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScannerPage implements OnInit {
  // UI
  scannerActive = true;
  scannedCode: string;
  scannedMachine: MachineModel;
  displayTime = '00:00:00';
  // UI Clock
  clockColor = '#ffffff'
  clockDiv = 0;
  // TIMER
  subscription: Subscription;
  startTime: Date;
  endTime: Date;

  private machines: MachineModel[];

  constructor(
    public activeRoute: ActivatedRoute,
    private ref: ChangeDetectorRef,
    private machineService: MachineService,
    private timeService: TimeService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(res => {
      this.getMachines();
    })
  }

  getMachines() {
    this.machineService.getMachines().subscribe(res => {
      this.machines = res;
      this.setupClock();
    })
  }

  code(code: BarcodeScanResult) {
    this.scannedCode = code.text;
    this.setupClock();
    // console.log(this.scannedMachine);
    this.scannerActive = false;
    this.ref.detectChanges();
    this.setupTimer();
  }

  finished() {
    this.scannerActive = true;
    this.clockDiv = 0;
    this.displayTime = '00:00:00'
    this.ref.detectChanges();
    this.subscription.unsubscribe();
    this.timeService.createTime(new TimeModel(this.startTime, this.endTime, this.scannedMachine)).subscribe(res => {
      console.log(res);
    })
  }

  setupTimer() {
    this.startTime = new Date();
    this.endTime = new Date();
    this.subscription = interval(1000).subscribe(res => {
      // START: DEVELOPER
      const time = this.settingsService.getTimerSpeedValue() ? 60000 : 1000;
      console.log(time);
       // END: DEVELOPER
      this.endTime = new Date(this.endTime.getTime() + time);
      const displayDate = new Date(this.endTime.getTime() - this.startTime.getTime())
      console.log(displayDate);
      this.clockDiv =  Math.floor(displayDate.getSeconds() / 15);
      this.displayTime = displayDate.toISOString().slice(11, 19);
    })
  }

  setupClock() {
    if (!this.scannedCode || !this.machines) return
    this.scannedMachine = this.machines.find(machine => machine.codeId == this.scannedCode);
    this.clockColor = this.scannedMachine.color;
  }

}
