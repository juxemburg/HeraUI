export interface ITexture {
    Draw(context: any, x: number, y: number);
    Update(context: any);
    Flip();
    Show(val: boolean);
}

export class SquareTexture implements ITexture {

    constructor(
        private _width: number,
        private _height: number) { }

    Draw(context: any, x: number, y: number) {
        context.fillRect(x, y, this._width, this._height);
    }

    Update(context: any) { }

    Flip() { }

    Show(val: boolean) { }
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

    Flip() { }

    Show(val: boolean) { }
}


export class ImageTexture implements ITexture {



    private _visible: boolean;
    public get visible(): boolean {
        return this._visible;
    }
    public set visible(v: boolean) {
        this._visible = v;
    }


    private _flipped: boolean;
    public get flipped(): boolean {
        return this._flipped;
    }
    public set flipped(v: boolean) {
        this._flipped = v;
    }


    constructor(
        private _x: number,
        private _y: number,
        private image: HTMLImageElement) {
        this.visible = true;
    }

    Draw(context: any, x: number, y: number) {
        if (!this._visible) {
            return;
        }

        if (this._flipped) {
            context.translate(50, 0);
            context.scale(-1, 1);
            context.drawImage(this.image, x + this._x, y + this._y);
        } else {
            context.drawImage(this.image, x + this._x, y + this._y);
        }

    }

    Update(context: any) { }

    Flip() {
        this.flipped = !this.flipped;
    }

    Show(val: boolean) {
        this.visible = val;
    }
}
