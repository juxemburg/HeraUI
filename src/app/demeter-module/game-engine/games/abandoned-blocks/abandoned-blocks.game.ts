import { Game } from '../../game.game';
import { Observable } from 'rxjs';
import { LoadHouse, LoadZombieHorde } from './abandoned-blocks.loader';

export class AbandonedBlocks extends Game {
  constructor(
    canvasId: string,
    private _usedBlocks: number,
    private _abandonedBlocks: number
  ) {
    super(canvasId, 1200, 300);

    for (let i = 0; i < this._usedBlocks; i++) {
      const house = LoadHouse(1000 + i, 100 + i * 160, 100);
      this.addGameObject(house);
    }
    for (let i = 0; i < this._abandonedBlocks; i++) {
      const horde = LoadZombieHorde(1000 + i, 100 + i * 160, 45);
      this.addGameObject(horde);
    }
  }

  public Load(): Observable<any> {
    super.Load();
    setTimeout(() => this._onLoadSource.next(true), 200);
    return this.onLoaded$;
  }
  protected Update(): void {
    super.Update();
  }
  protected Draw(): void {
    super.Draw();
  }
  public Start(): void {
    super.Start();
  }
  public End(): void {
    super.End();
  }
}
