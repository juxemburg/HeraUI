import { ImageTexture } from '../drawing/textures.drawing';
import { TextureMap } from './textures';
import { Observable, of, Subject, forkJoin, zip } from 'rxjs';


export class TextureLoader {
    private _textureMap = new Map<string, HTMLImageElement>();

    private _onTexturesLoadedSource = new Subject<boolean>();
    public onTexturesloaded$ = this._onTexturesLoadedSource.asObservable();

    public clear = () => {
        this._textureMap = new Map<string, HTMLImageElement>();
    }

    public LoadTextures = (textures: string[]): Observable<boolean[]> => {
        return zip(this.LoadTexture(textures[0]));
    }

    public LoadTexture = (textureName: string): Observable<boolean> => {

        if (!TextureMap[textureName]) {
            return of(null);
        }

        if (this._textureMap.has(textureName)) {
            return of(true);
        }

        const image = new Image();
        image.src = TextureMap[textureName];

        return Observable.create(obs => {
            image.onload = () => {
                this._textureMap.set(textureName, image);
                obs.next(true);
            }
        });
    }

    public GetTexture(textureName: string): HTMLImageElement {
        return this._textureMap.has(textureName) ?
            this._textureMap.get(textureName) : null;

    }

}
