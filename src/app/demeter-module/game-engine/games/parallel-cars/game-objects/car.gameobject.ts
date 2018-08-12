import { Observable, Subject } from 'rxjs';
import { Sprite } from '../../../drawing/sprite.drawing';
import { IGameItem } from '../../../game-objects/game-item.interface';
import { SquareTexture } from '../../../drawing/textures.drawing';


export class Car implements IGameItem {

    private _sprite: Sprite;
    private _stopped = false;

    itemLoadedSource = new Subject<boolean>();
    onItemLoaded$ = this.itemLoadedSource.asObservable();

    public get Id(): number {
        return this._id;
    }

    public get X(): number {
        return this._x;
    }

    public get Y(): number {
        return this._y;
    }

    public get Right(): number {
        return this._x + 50;
    }

    constructor(
        private _id: number,
        private _x: number,
        private _y: number,
        private _speed: number = 2) {
        this._sprite = new Sprite(
            0, 0, [new SquareTexture(50, 50)]);
    }

    public CheckCollision(cars: Car[]): void {
        if (cars.some(item => this.collide(item))) {
            this._stopped = true;
        }
    }

    private collide(otherCar: Car): boolean {

        var res = this.Id !== otherCar.Id &&
            (((this.X + this._speed) < otherCar.Right && (this.X + this._speed) > otherCar.X)
                || ((this.Right + this._speed) > otherCar.X && (this.Right + this._speed) < otherCar.Right));
        return res;
    }

    Load(): Observable<boolean> {
        setTimeout(() => {
            this.itemLoadedSource.next(true);
        }, 10);
        return this.onItemLoaded$;
    }

    Update(elapsedGameTime: number): void {
        if (this._stopped) {
            this._stopped = false;
            return;
        }

        this._x += this._speed;
        if (this._x > 1100) {
            this._speed *= -1;
        }
        if (this._x < 60) {
            this._speed *= -1;
        }
    }

    Draw(context: any): void {
        this._sprite.Draw(context, this.X, this.Y);
    }
}
