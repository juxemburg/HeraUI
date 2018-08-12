import { Subject, Observable } from 'rxjs';
import { Sprite } from '../../../drawing/sprite.drawing';
import { IGameItem } from '../../../game-objects/game-item.interface';
import { LineTexture } from '../../../drawing/textures.drawing';


export class Lane implements IGameItem {

    private _sprites: Sprite[] = [];

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
        width: number,
        height: number) {
        this._sprites = [
            new Sprite(0, 0, [new LineTexture(0, width, 0, 0)]),
            new Sprite(0, 0, [new LineTexture(0, width, height, height)])
        ];
    }

    Load(): Observable<boolean> {
        setTimeout(() => {
            this.itemLoadedSource.next(true);
        }, 10);
        return this.onItemLoaded$;
    }

    Update(elapsedGameTime: number): void { }

    Draw(context: any): void {
        this._sprites.forEach(sprite =>
            sprite.Draw(context, this.X, this.Y));
    }

}
