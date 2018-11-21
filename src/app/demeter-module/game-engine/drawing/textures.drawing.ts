export interface ITexture {
  Draw(context: any, x: number, y: number);
  Update?(elapsedGameTime: number);
  Flip();
  Show(val: boolean);
}

export class SquareTexture implements ITexture {
  constructor(private _width: number, private _height: number) {}

  Draw(context: any, x: number, y: number) {
    context.fillRect(x, y, this._width, this._height);
  }

  Flip() {}

  Show(val: boolean) {}
}

export class LineTexture implements ITexture {
  constructor(
    private _x1: number,
    private _x2: number,
    private _y1: number,
    private _y2: number
  ) {}

  Draw(context: any, x: number, y: number) {
    context.beginPath();
    context.moveTo(x + this._x1, y + this._y1);
    context.lineTo(x + this._x2, y + this._y2);
    context.stroke();
  }

  Flip() {}

  Show(val: boolean) {}
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

  private _frameTimer = 0;
  private _frameTime = 60 * (1000 / 60);
  private _frameCount = 0;
  private _imageX = 0;

  constructor(
    private _x: number,
    private _y: number,
    private _sx: number,
    private _sy: number,
    private _swidth: number,
    private _sheight: number,
    private image: HTMLImageElement,
    private _frameWidth: number,
    private _frameHeight: number,
    private _frames = 1,
    frameTime = 60
  ) {
    this.visible = true;
    this._frameTime = frameTime * (1000 / 60);
  }

  Draw(context: any, x: number, y: number) {
    if (!this._visible) {
      return;
    }

    context.drawImage(
      this.image,
      this._sx + this._imageX * this._frameWidth,
      this._sy,
      this._swidth,
      this._sheight,
      x + this._x,
      y + this._y,
      this._swidth,
      this._sheight
    );
  }

  Update(elapsedGameTime: number) {
    this._frameTimer += elapsedGameTime;
    if (this._frameTimer > this._frameTime) {
      this._imageX = this._frameCount % this._frames;
      this._frameCount++;
      this._frameTimer = 0;
    }
  }

  Flip() {
    this.flipped = !this.flipped;
  }

  Show(val: boolean) {
    this.visible = val;
  }
}
