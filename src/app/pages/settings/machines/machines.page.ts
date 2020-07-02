import { Component, OnInit } from '@angular/core';
import { MachineModel, MachineService } from 'src/app/shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.page.html',
  styleUrls: ['./machines.page.scss'],
})
export class MachinesPage implements OnInit {

  //UI
  showScanner = false;

  machines: MachineModel[];
  private machine : FormGroup;

  // machine: MachineModel = new MachineModel();

  constructor(
    private machineService: MachineService,
    private formBuilder: FormBuilder
  ) { 
    this.machine = this.formBuilder.group({
      name: [null, [Validators.required]],
      color: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.machineService.getMachines().subscribe(res => {
      console.log(res);
      this.machines = res;
    })
  }

  submit() {
    this.showScanner = true;
  }

  code(code: BarcodeScanResult) {
    this.showScanner = false;
    const codeId = code.text;
    const name = this.machine.get('name').value;
    const color = this.machine.get('color').value;
    this.create(new MachineModel(codeId, name, color));
    
  }

  //SERVICE
  create(machine: MachineModel) {
    this.machineService.createMachine(machine).subscribe(res => {
      console.log('created machine: ', res);
      this.machine.reset();
    })
  }

  delete(machine: MachineModel) {
    this.machineService.deleteMachine(machine).subscribe(res => {
      console.log('deleted machine: ', res);
    })
  }



}
