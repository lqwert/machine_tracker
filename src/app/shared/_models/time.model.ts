import { MachineModel } from './machine.model';

export class TimeModel {

    // id: string;
    startTime: Date;
    endTime: Date;
    // totalTime: number
    machine: MachineModel;

    constructor() 
    constructor(_startTime: Date, _endTime: Date, _machine: MachineModel)
    constructor(_startTime?: Date, _endTime?: Date, _machine?: MachineModel) {
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.machine = _machine;
    }
}