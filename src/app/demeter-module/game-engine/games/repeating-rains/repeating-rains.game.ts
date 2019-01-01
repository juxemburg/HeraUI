import { Game } from '../../game.game';
import { Observable } from 'rxjs';
import { LoadGarden, LoadCloud } from './repeating-rains.loader';

export class RepeatingRains extends Game {
  constructor(
    canvasId: string,
    private _requiredLoops: number,
    private _maxAllowedLoops: number,
    private _minAllowedLoops: number,
    private _usedLoops: number,
    private _invalidLoops: number
  ) {
    super(canvasId, 1200, 300);

    const validLoops =  Math.min(this._maxAllowedLoops, _usedLoops);
    for (let i = 0; i < this._usedLoops; i++) {
      const garden = LoadGarden(1000 + i, 100 + i * 160, 100);
      this.addGameObject(garden);
    }
    for (let i = 0; i < validLoops; i++) {
      const garden = LoadCloud(1000 + i, 100 + i * 160, 45);
      this.addGameObject(garden);
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
