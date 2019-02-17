import { Game } from '../../game.game';
import { Observable } from 'rxjs';
import {
  LoadHouse,
  LoadZombieHorde,
  LoadSafeHouse
} from './abandoned-blocks.loader';

export class AbandonedBlocks extends Game {
  constructor(
    canvasId: string,
    private _usedBlocks: number,
    private _abandonedBlocks: number
  ) {
    super(canvasId, 1200, (_usedBlocks / 6) * 130 + 100);

    const safeHouseCount = this._usedBlocks - this._abandonedBlocks;

    let y = 100;
    for (let i = 0; i < this._usedBlocks; i++) {
      const x = 100 + (i % 6) * 160;

      if (i < this._abandonedBlocks) {
        const house = LoadHouse(1000 + i, x, y);
        const horde = LoadZombieHorde(100000 + i, x, y + 35);
        this.addGameObject(house);
        this.addGameObject(horde);
      } else {
        const house = LoadSafeHouse(1 + i, x, y);
        this.addGameObject(house);
      }

      if (i % 6 === 5) {
        y += 120;
      }
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
