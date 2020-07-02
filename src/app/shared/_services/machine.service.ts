import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MachineModel } from '../_models/machine.model';
import { machineDataDummy } from '../_data/machine.data';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor() { }

  /**
   * GET
   */
  getMachines(): Observable<MachineModel[]> {
    return of(machineDataDummy)
  }

  /**
   * CREATE
   */
  createMachine(machine: MachineModel): Observable<MachineModel> {
    machineDataDummy.push(machine);
    return of(machine);
  }

  /**
   * DELETE
   */
  deleteMachine(machine: MachineModel): Observable<boolean> {
    const index = machineDataDummy.indexOf(machine);
    if (index > -1) machineDataDummy.splice(index, 1);
    return of(true);
  }
}
