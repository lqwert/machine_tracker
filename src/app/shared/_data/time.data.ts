import { TimeModel } from '../_models/time.model';
import { machineDataDummy } from './machine.data';

export const timeDataDummy = [];

export const TIME_1 = new TimeModel(new Date(Date.UTC(96, 1, 2, 7, 45, 0)), new Date(Date.UTC(96, 1, 2, 8, 45, 0)), machineDataDummy[0]);
export const TIME_2 = new TimeModel(new Date(Date.UTC(96, 1, 2, 8, 45, 0)), new Date(Date.UTC(96, 1, 2, 9, 15, 0)), machineDataDummy[1]);
export const TIME_3 = new TimeModel(new Date(Date.UTC(96, 1, 2, 9, 40, 0)), new Date(Date.UTC(96, 1, 2, 9, 53, 0)), machineDataDummy[0]);
export const TIME_4 = new TimeModel(new Date(Date.UTC(96, 1, 2, 9, 58, 0)), new Date(Date.UTC(96, 1, 2, 10, 45, 0)), machineDataDummy[2]);
export const TIME_5 = new TimeModel(new Date(Date.UTC(96, 1, 2, 10, 45, 0)), new Date(Date.UTC(96, 1, 2, 11, 23, 0)), machineDataDummy[0]);
export const TIME_6 = new TimeModel(new Date(Date.UTC(96, 1, 2, 12, 0, 0)), new Date(Date.UTC(96, 1, 2, 13, 30, 0)), machineDataDummy[1]);