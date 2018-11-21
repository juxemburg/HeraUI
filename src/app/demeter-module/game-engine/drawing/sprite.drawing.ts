import { ITexture } from './textures.drawing';

export class Sprite {
  private _textures: ITexture[] = [];

  public get relativeX() {
    return this._x;
  }
  public set relativeX(val: number) {
    this._x = val;
  }

  public get relativeY() {
    return this._y;
  }
  public set relativeY(val: number) {
    this._y = val;
  }

  constructor(private _x: number, private _y: number, textures: ITexture[]) {
    this._textures = textures;
  }

  public Update(elapsedGameTime: number) {
      this._textures.forEach(texture => texture.Update(elapsedGameTime));
  }

  public Draw(context: any, absoluteX: number, absoluteY: number): void {
    this._textures.forEach(texture =>
      texture.Draw(
        context,
        absoluteX + this.relativeX,
        absoluteY + this.relativeY
      )
    );
  }

  public Flip() {
    this._textures.forEach(texture => texture.Flip());
  }

  public Show(index: number, val: boolean) {
    if (this._textures[index]) {
      this._textures[index].Show(val);
    }
  }
}
