import { IGameItem } from 'app/demeter-module/game-engine/game-objects/game-item.interface';
import { Subject, Observable } from 'rxjs';
import { Sprite } from 'app/demeter-module/game-engine/drawing/sprite.drawing';

export class ActorSpot implements IGameItem {
  public get Id(): number {
    return this._id;
  }

  public get X(): number {
    return this._x;
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
    private _lightSprite: Sprite,
    private _baseSprite: Sprite
  ) {}

  Load(): Observable<boolean> {
    this.itemLoadedSource.next(true);
    this.onItemLoaded$.subscribe();
    return this.onItemLoaded$;
  }
  Update(elapsedGameTime: number): void {}

  Draw(context: any): void {
    this._baseSprite.Draw(context, this.X, this.Y);
    this._lightSprite.Draw(context, this.X, this.Y);
  }
}
