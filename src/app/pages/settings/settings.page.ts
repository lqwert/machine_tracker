import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/_settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  dummyData: boolean;
  disableScanner: boolean
  timerSpeed: boolean;

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.dummyData = this.settingsService.getDummyDataValue();
    this.disableScanner = this.settingsService.getDisableScannerValue();
    this.timerSpeed = this.settingsService.getTimerSpeedValue();
  }

  changeDummyData(change: CustomEvent) {
    this.settingsService.changeDummyData(change.detail.checked);
  }

  changeDisableScanner(change: CustomEvent) {
    this.settingsService.changeDisableScanner(change.detail.checked);
  }

  changeTimerSpeed(change: CustomEvent) {
    this.settingsService.changeTimerSpeed(change.detail.checked)
  }

}
