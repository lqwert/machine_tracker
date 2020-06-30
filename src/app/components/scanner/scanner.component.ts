import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
// SCANNER
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit, OnChanges {

  @Input() activateScanner: boolean = false;
  @Output() code: EventEmitter<BarcodeScanResult> = new EventEmitter<BarcodeScanResult>();

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    console.log('init: ', this.activateScanner);
    if (this.activateScanner) this.scan();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code.emit(barcodeData);
      this.activateScanner = false;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
