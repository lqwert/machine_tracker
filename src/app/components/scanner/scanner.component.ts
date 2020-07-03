import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
// SCANNER
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from 'src/app/shared/_settings/settings.service';
import { MachineService, MachineModel } from 'src/app/shared';


@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {

  @Output() code = new EventEmitter<BarcodeScanResult>();

  scannerDisabled: boolean;
  machines: MachineModel[] = [];
  selectedMachine: string;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private settingsService: SettingsService,
    public activeRoute: ActivatedRoute,
    // START DEVELOPER
    private machineService: MachineService,
    // END DEVELOPER
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      console.log('route active scanner');
      this.selectedMachine = this.settingsService.getDefaultMachineValue();
      this.machineService.getMachines().subscribe(res => {
        this.machines = res;
      })
      // START DEVELOPER
      this.scannerDisabled = this.settingsService.getDisableScannerValue();
      // END DEVELOPER
    })
  }

  submit() {
    this.scannerDisabled ? this.simulateScan() : this.scan();
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code.emit(barcodeData);
    }).catch(err => {
      console.error('Error', err);
    });
  }

  workValue(event: CustomEvent) {
    this.selectedMachine = event.detail.value;
  }

  work() {
    const barcode = {} as BarcodeScanResult;
    barcode.text = this.selectedMachine;
    this.code.emit(barcode);
  }

  // TESTING WITHOUT SCANNER (Browser)
  simulateScan() {
    this.machineService.getMachines().subscribe(res => {
      const barcode = {} as BarcodeScanResult;
      barcode.text = Math.floor(Math.random() * res.length).toString();
      this.code.emit(barcode);
    })
  }

}
