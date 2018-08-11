import { Subject, Observable } from 'rxjs';

export interface IGameItem {

    itemLoadedSource: Subject<boolean>;
    onItemLoaded$: Observable<boolean>;

    Load(): Observable<boolean>;
    Update(elapsedGameTime: number): void;
    Draw(context: any): void;
}
