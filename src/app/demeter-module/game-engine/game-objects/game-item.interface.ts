import { Subject, Observable } from 'rxjs';

export interface IGameItem {

    Id: number;

    itemLoadedSource: Subject<boolean>;
    onItemLoaded$: Observable<boolean>;

    X: number;
    Y: number;

    Load(): Observable<boolean>;
    Update(elapsedGameTime: number): void;
    Draw(context: any): void;
}
