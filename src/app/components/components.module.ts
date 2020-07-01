import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner/scanner.component';
import { OverviewDayComponent } from './overview-day/overview-day.component';



@NgModule({
  declarations: [
    ScannerComponent,
    OverviewDayComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScannerComponent,
    OverviewDayComponent
  ]
})
export class ComponentsModule { }
