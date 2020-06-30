// ANGULAR
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// SCANNER
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { interval, Subscription } from 'rxjs';
import { MachineModel, MachineService } from 'src/app/shared';


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
  displayTime: string;
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
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(res => {
      this.getMachines();
    })
  }

  getMachines() {
    this.machineService.getMachines().subscribe(res => {
      this.machines = res;
      if (!this.scannedMachine) this.setupMachine();
    })
  }

  code(code: BarcodeScanResult) {
    this.scannedCode = code.text;
    if (this.machines) this.setupMachine();
    console.log(this.scannedMachine);
    this.scannerActive = false;
    this.ref.detectChanges();
    this.setupTimer();
  }

  finished() {
    this.scannerActive = true;
    this.clockDiv = 0;
    this.ref.detectChanges();
    this.subscription.unsubscribe();
  }

  setupTimer() {
    this.startTime = new Date(0);
    this.endTime = new Date(0);
    this.subscription = interval(1000).subscribe(res => {
      this.endTime = new Date(this.endTime.getTime() + 1000);
      console.log(this.endTime);
      this.clockDiv =  Math.floor(this.endTime.getSeconds() / 15);
      console.log(this.clockDiv);
      this.displayTime = new Date(this.endTime.getTime() - this.startTime.getTime()).toISOString().slice(11, 19);
    })
  }

  setupMachine() {
    this.scannedMachine = this.machines.find(machine => machine.codeId == this.scannedCode);
    this.clockColor = this.scannedMachine.color;
  }

}
