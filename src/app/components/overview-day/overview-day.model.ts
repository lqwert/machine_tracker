export class OverviewDayModel {

    title: string;
    startTime: Date;
    endTime: Date;
    height: number;
    color: string;
    minuteLines: string[];

    constructor(_title: string, _startTime: Date, _endTime: Date, _height: number, _minuteLines: string[] = [], _color ='') {
        this.title = _title;
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.height = _height;
        this.color = _color
        this.minuteLines = _minuteLines;
    }

}