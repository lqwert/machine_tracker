import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
// SCANNER
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from 'src/app/shared/_settings/settings.service';


@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {

  @Output() code = new EventEmitter<BarcodeScanResult>();

  constructor(
    private barcodeScanner: BarcodeScanner,
    private settingsService: SettingsService,
    public activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      console.log('route active scanner');
      // START DEVELOPER
      if (!this.settingsService.getDisableScannerValue()) this.scan()
      // END DEVELOPER
    })
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code.emit(barcodeData);
    }).catch(err => {
      console.error('Error', err);
    });
  }

   // TESTING WITHOUT SCANNER (Browser)
  simulateScan() {
    const barcode = {} as BarcodeScanResult;
    barcode.text = Math.floor(Math.random() * 3).toString(); 
    this.code.emit(barcode);
  }

}
