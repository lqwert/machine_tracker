import { Component, OnInit } from '@angular/core';
// SCANNER
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  activeCode: string;

  constructor() {
   }

  ngOnInit() {
    console.log('int scan page');
  }

  code(code: BarcodeScanResult) {
    console.log(code);
    this.activeCode = code.text;
  }

}
