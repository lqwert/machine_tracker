import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MachineModel } from '../_models/machine.model';
import { machineData } from '../_data/machine.data';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor() { }

  getMachines(): Observable<MachineModel[]> {
    return of(machineData)
  }
}
