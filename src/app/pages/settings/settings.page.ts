import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/_settings/settings.service';
import { ActivatedRoute } from '@angular/router';
import { MachineService, MachineModel, TimeService, TimeModel } from 'src/app/shared';
import { StorageService } from 'src/app/shared/_services/storage.service';
import { ToastController } from '@ionic/angular';

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
  workTimes: TimeModel[] = [];

  constructor(
    private settingsService: SettingsService,
    private machineService: MachineService,
    private storageService: StorageService,
    private timeService: TimeService,
    public activeRoute: ActivatedRoute,
    public toastController: ToastController,  
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      this.machineService.getMachines().subscribe(res => {
        this.machines = res;
      })
      this.getWorkToday();
    })
    this.defaultMachine = this.settingsService.getDefaultMachineValue();
    this.dummyData = this.settingsService.getDummyDataValue();
    this.disableScanner = this.settingsService.getDisableScannerValue();
    this.timerSpeed = this.settingsService.getTimerSpeedValue();
  }

  getWorkToday() {
    this.timeService.getToday().subscribe(res => {
      this.workTimes = res;
    })
  }

  changeDefaultMachine(change: CustomEvent) {
    this.settingsService.changeDefaultMachine(change.detail.value);
  }

  async changeTheme(change: CustomEvent) {
    const toast = await this.toastController.create({
      header: 'Info',
      message: 'Are you actually expecting to have a light mode, lol xD :*, maybe at some point, This message will stay for 10 seconds' +
      'the toggle is useless :D!',
      duration: 10000,
      position: 'middle',
    });
    toast.present();
  }

  /**
   * DEVELOPER
   */
  changeDummyData(change: CustomEvent) {
    this.settingsService.changeDummyData(change.detail.checked);
    this.getWorkToday();
  }

  changeDisableScanner(change: CustomEvent) {
    this.settingsService.changeDisableScanner(change.detail.checked);
  }

  async changeTimerSpeed(change: CustomEvent) {
    this.settingsService.changeTimerSpeed(change.detail.checked);
    const toast = await this.toastController.create({
      header: 'Warning!',
      message: 'This kinda brakes the overview, because a list with startTime > endTime > starTime > ... is expcted. ' +
      'But it makes the point of the overview clear. Press "Delete work time" to reset saved work times.',
      duration: 10000,
      position: 'middle',
    });
    toast.present();
  }

  deleteWorkTime() {
    this.getWorkToday();
    this.storageService.deleteSavedWorkTime();
    this.storageService.initaliseStorage();
  }

}
