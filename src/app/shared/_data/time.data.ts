import { TimeModel } from '../_models/time.model';
import { machineData } from './machine.data';

export const timeData = [
    new TimeModel(new Date(0), new Date(4000), machineData[0]),
    new TimeModel(new Date(4000), new Date(10000), machineData[1]),
    new TimeModel(new Date(), new Date(), machineData[0]),
    new TimeModel(new Date(), new Date(), machineData[2]),
    new TimeModel(new Date(), new Date(), machineData[0]),
]