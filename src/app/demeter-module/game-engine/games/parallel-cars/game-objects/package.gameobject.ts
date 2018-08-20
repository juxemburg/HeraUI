import { Observable, Subject } from 'rxjs';
import { Sprite } from '../../../drawing/sprite.drawing';
import { IGameItem } from '../../../game-objects/game-item.interface';
import { SquareTexture } from '../../../drawing/textures.drawing';


export class Package implements IGameItem {

    private _sprite: Sprite;
    private _visible = true;

    public pickedUp = false;

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
            0, 0, [new SquareTexture(10, 10)]);
    }


    Load(): Observable<boolean> {
        setTimeout(() => {
            this.itemLoadedSource.next(true);
        }, 1000);
        return this.onItemLoaded$;
    }

    Update(elapsedGameTime: number): void {
    }

    Draw(context: any): void {
        if (this._visible) {
            this._sprite.Draw(context, this.X, this.Y);
        }
    }

    public PickUp() {
        this._visible = false;
        this.pickedUp = true;
    }

    public Deliver() {
        this.pickedUp = false;
        this._visible = true;
        this._x = 10;
    }
}
