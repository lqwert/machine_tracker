export class MachineModel {

    // id: string;
    codeId: number;
    name: string;
    color: string;

    constructor() 
    constructor(_codeId: number, _name: string, _color: string)
    constructor(_codeId?: number, _name?: string, _color?: string) {
        this.codeId = _codeId;
        this.name = _name;
        this.color = _color;
    }
}