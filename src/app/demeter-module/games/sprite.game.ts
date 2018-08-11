export class Sprite {

    public get X() { return this._x };
    public set X(val: number) { this._x = val };

    public get Y() { return this._y };
    public set Y(val: number) { this._y = val };


    constructor(
        private _x: number,
        private _y: number) { }

    public Draw(context: any): void {
        context.rect(this._x, this._y, 50, 50);
        context.fillRect(this._x, this._y, 50, 50);
        context.stroke();
    }
}
