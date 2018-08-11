import { IGameItem } from '../../game-item.interface';
import { Observable, Subject } from 'rxjs';
import { Sprite } from '../../sprite.game';

export class Car implements IGameItem {

    private _sprite: Sprite;


    itemLoadedSource = new Subject<boolean>();
    onItemLoaded$ = this.itemLoadedSource.asObservable();

    constructor(x: number, y: number, private _speed: number = 2) {
        this._sprite = new Sprite(x, y);
    }

    Load(): Observable<boolean> {
        setTimeout(() => {
            this.itemLoadedSource.next(true);
        }, 10);
        return this.onItemLoaded$;
    }

    Update(elapsedGameTime: number): void {
        this._sprite.X += this._speed;
        if (this._sprite.X > 1000) {
            this._speed = -2;
        }
        if (this._sprite.X < 10) {
            this._speed = 2;
        }
    }

    Draw(context: any): void {
        this._sprite.Draw(context);
    }


}
