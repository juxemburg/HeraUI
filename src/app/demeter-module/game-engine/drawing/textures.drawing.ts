export interface ITexture {
    Draw(context: any, x: number, y: number);
    Update(context: any);
}

export class SquareTexture implements ITexture {

    constructor(
        private _width: number,
        private _height: number) { }

    Draw(context: any, x: number, y: number) {
        context.fillRect(x, y, this._width, this._height);
    }

    Update(context: any) { }
}

export class LineTexture implements ITexture {

    constructor(
        private _x1: number,
        private _x2: number,
        private _y1: number,
        private _y2: number) { }

    Draw(context: any, x: number, y: number) {
        context.beginPath();
        context.moveTo(x + this._x1, y + this._y1);
        context.lineTo(x + this._x2, y + this._y2);
        context.stroke();
    }

    Update(context: any) { }
}
