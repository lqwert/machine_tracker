import { TimeModel } from '../_models/time.model';
import { machineDataDummy } from './machine.data';

export const timeDataDummy = [];
/**
 * Expected is a list order by date
 */
export const TIME_1 = new TimeModel(new Date(Date.UTC(96, 1, 2, 7, 45, 0)), new Date(Date.UTC(96, 1, 2, 8, 45, 0)), machineDataDummy[0]);
export const TIME_2 = new TimeModel(new Date(Date.UTC(96, 1, 2, 8, 45, 0)), new Date(Date.UTC(96, 1, 2, 9, 15, 0)), machineDataDummy[1]);
export const TIME_3 = new TimeModel(new Date(Date.UTC(96, 1, 2, 9, 40, 0)), new Date(Date.UTC(96, 1, 2, 9, 53, 0)), machineDataDummy[3]);
export const TIME_4 = new TimeModel(new Date(Date.UTC(96, 1, 2, 9, 58, 0)), new Date(Date.UTC(96, 1, 2, 10, 45, 0)), machineDataDummy[2]);
export const TIME_5 = new TimeModel(new Date(Date.UTC(96, 1, 2, 10, 45, 0)), new Date(Date.UTC(96, 1, 2, 11, 23, 0)), machineDataDummy[4]);
export const TIME_6 = new TimeModel(new Date(Date.UTC(96, 1, 2, 12, 0, 0)), new Date(Date.UTC(96, 1, 2, 13, 30, 0)), machineDataDummy[1]);
// CASE WORK IS LESS THEN A SECOND
export const TIME_7 = new TimeModel(new Date(Date.UTC(96, 1, 2, 14, 0, 0)), new Date(Date.UTC(96, 1, 2, 14, 0, 32)), machineDataDummy[1]);
export const TIME_8 = new TimeModel(new Date(Date.UTC(96, 1, 2, 14, 0, 54)), new Date(Date.UTC(96, 1, 2, 14, 1, 34)), machineDataDummy[3]);
export const TIME_9 = new TimeModel(new Date(Date.UTC(96, 1, 2, 14, 2, 33)), new Date(Date.UTC(96, 1, 2, 15, 1, 34)), machineDataDummy[1]);
// MORE RANDOM TIME
export const TIME_10 = new TimeModel(new Date(Date.UTC(96, 1, 2, 15, 2, 32)), new Date(Date.UTC(96, 1, 2, 15, 32, 23)), machineDataDummy[0]);
export const TIME_11 = new TimeModel(new Date(Date.UTC(96, 1, 2, 15, 32, 23)), new Date(Date.UTC(96, 1, 2, 15, 55, 22)), machineDataDummy[4]);
export const TIME_12 = new TimeModel(new Date(Date.UTC(96, 1, 2, 15, 57, 12)), new Date(Date.UTC(96, 1, 2, 16, 14, 34)), machineDataDummy[2]);
export const TIME_13 = new TimeModel(new Date(Date.UTC(96, 1, 2, 16, 16, 43)), new Date(Date.UTC(96, 1, 2, 16, 55, 32)), machineDataDummy[3]);
export const TIME_14 = new TimeModel(new Date(Date.UTC(96, 1, 2, 17, 2, 33)), new Date(Date.UTC(96, 1, 2, 18, 1, 34)), machineDataDummy[1]);