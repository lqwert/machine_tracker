export class MachineModel {
    // id: string;
    codeId: string;
    name: string;
    color: string;

    constructor() 
    constructor(_codeId: string, _name: string, _color: string)
    constructor(_codeId?: string, _name?: string, _color?: string) {
        this.codeId = _codeId;
        this.name = _name;
        this.color = _color;
    }
}