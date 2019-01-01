import { Game } from './game.game';
import { Observable } from 'rxjs';

export class GameContainer {
  private _gameTimer$: Observable<any>;
  private _remainingTime$: Observable<number>;

  constructor(private _game: Game, textureloader$: Observable<any>) {}

  public loadGame() {}
}
