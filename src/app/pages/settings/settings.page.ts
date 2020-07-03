import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/_settings/settings.service';
import { ActivatedRoute } from '@angular/router';
import { MachineService, MachineModel } from 'src/app/shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  defaultMachine: string;
  dummyData: boolean;
  disableScanner: boolean
  timerSpeed: boolean;

  machines: MachineModel[];

  constructor(
    private settingsService: SettingsService,
    private machineService: MachineService,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      this.machineService.getMachines().subscribe(res => {
        this.machines = res;
      })
    })
    this.defaultMachine = this.settingsService.getDefaultMachineValue();
    this.dummyData = this.settingsService.getDummyDataValue();
    this.disableScanner = this.settingsService.getDisableScannerValue();
    this.timerSpeed = this.settingsService.getTimerSpeedValue();
  }

  changeDefaultMachine(change) {
    this.settingsService.changeDefaultMachine(change.detail.value);
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
