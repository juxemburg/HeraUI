import { IGameItem } from 'app/demeter-module/game-engine/game-objects/game-item.interface';
import { Subject, Observable, of } from 'rxjs';
import { Sprite } from 'app/demeter-module/game-engine/drawing/sprite.drawing';

export class Actor implements IGameItem {
  private _buffer = 0;
  private _speed = 1;

  public get Id(): number {
    return this._id;
  }

  public get X(): number {
    return this._x + this._buffer;
  }

  public get Y(): number {
    return this._y;
  }

  itemLoadedSource = new Subject<boolean>();
  onItemLoaded$ = this.itemLoadedSource.asObservable();

  constructor(
    private _id: number,
    private _x: number,
    private _y: number,
    private _sprite: Sprite,
    private _baseSpeed = 10
  ) {
    this._speed = +this._baseSpeed;
  }

  Load(): Observable<boolean> {
    this.itemLoadedSource.next(true);
    this.onItemLoaded$.subscribe();
    return this.onItemLoaded$;
  }
  Update(elapsedGameTime: number): void {
    this._buffer += this._speed * (elapsedGameTime / 1000);
    if (this._buffer >= 25) {
      this._speed = this._baseSpeed * -1;
    }
    if (this._buffer <= -25) {
      this._speed = this._baseSpeed;
    }
    this._sprite.Update(elapsedGameTime);
  }
  Draw(context: any): void {
    this._sprite.Draw(context, this.X, this.Y);
  }
}
