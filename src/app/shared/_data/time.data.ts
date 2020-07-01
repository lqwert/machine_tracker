import { TimeModel } from '../_models/time.model';
import { machineData } from './machine.data';

export const timeData = [
    new TimeModel(new Date(Date.UTC(96, 1, 2, 7, 45, 0)), new Date(Date.UTC(96, 1, 2, 8, 45, 0)), machineData[0]),
    new TimeModel(new Date(Date.UTC(96, 1, 2, 8, 45, 0)), new Date(Date.UTC(96, 1, 2, 9, 15, 0)), machineData[1]),
    new TimeModel(new Date(Date.UTC(96, 1, 2, 9, 40, 0)), new Date(Date.UTC(96, 1, 2, 9, 53, 0)), machineData[0]),
    new TimeModel(new Date(Date.UTC(96, 1, 2, 9, 58, 0)), new Date(Date.UTC(96, 1, 2, 10, 45, 0)), machineData[2]),
    new TimeModel(new Date(Date.UTC(96, 1, 2, 10, 45, 0)), new Date(Date.UTC(96, 1, 2, 11, 23, 0)), machineData[0]),
    new TimeModel(new Date(Date.UTC(96, 1, 2, 12, 0, 0)), new Date(Date.UTC(96, 1, 2, 13, 30, 0)), machineData[1]),
]