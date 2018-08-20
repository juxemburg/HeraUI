import { Subject, forkJoin, Observable, of, zip } from 'rxjs';
import { IGameItem } from './game-objects/game-item.interface';
import { delay } from 'rxjs/operators';


export abstract class Game {
    private _canvas: any;
    private _context: any;

    private _frameRate = 1000 / 60;
    private _gameInterval: any;

    protected _onLoadSource = new Subject<boolean>();
    public onLoaded$ = this._onLoadSource.asObservable();

    protected _gameObjects: IGameItem[] = [];

    constructor(private canvasId: string) {
        this._canvas = document.getElementById(this.canvasId);
        this._canvas.width = 1200;
        this._canvas.height = 720;
        this._context = this._canvas.getContext('2d');
    }

    protected addGameObject(item: IGameItem) {
        this._gameObjects.push(item);
    }

    public Load(): Observable<any> {
        const observables: Observable<boolean>[] = this._gameObjects.map(item => item.Load());
        console.log(`observable count: ${observables.length}`);

        return zip(
            observables
        );
    }

    protected Update(): void {
        this._gameObjects.forEach(item => item.Update(this._frameRate));
    }

    protected Draw(): void {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._context.beginPath();
        this._context.fill();
        this._gameObjects.forEach(item => item.Draw(this._context));
    }

    public Start(): void {
        this._gameInterval = setInterval(() => {
            this.Update();
            this.Draw();
        }, this._frameRate)
    }

    public End(): void {
        clearInterval(this._gameInterval);
    }
}
