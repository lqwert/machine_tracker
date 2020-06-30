import { Component, OnInit } from '@angular/core';
import { MachineModel, MachineService } from 'src/app/shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  machines: MachineModel[];

  constructor(
    private machineService: MachineService
  ) { }

  ngOnInit() {
    this.machineService.getMachines().subscribe(res => {
      console.log(res);
      this.machines = res;
    })
  }

}
