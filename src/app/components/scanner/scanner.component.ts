import { Component, OnInit } from '@angular/core';
// SCANNER


@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {

  machine: string = 'Noting scanned yet';

  constructor() { }

  ngOnInit() {

  }

}
