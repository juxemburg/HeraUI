import { Game } from '../../game.game';
import { Observable } from 'rxjs';
import { LoadActor, LoadActorSpot } from './cloning-trouble.loader';

export class CloningTroubleGame extends Game {
  private _validClones = 0;
  private _extraClones = 0;
  private _zombieClones = 0;

  constructor(
    canvasId: string,
    private _requiredClones: number,
    private _maxAllowedClones: number,
    private _variableCount: number,
    private _usedClones: number,
    private _closedClones: number
  ) {
    super(canvasId, 1200, 300);
    this._zombieClones = Math.max(0, this._usedClones - this._closedClones);
    this._validClones = Math.max(
      0,
      Math.min(this._usedClones - this._zombieClones, this._requiredClones)
    );
    this._extraClones = Math.max(
      0,
      this._requiredClones - this._usedClones - this._zombieClones
    );

    for (let i = 0; i < this._requiredClones; i++) {
      const gameActorSpot = LoadActorSpot(1000 + i, 100 + i * 160, 50);
      // this.addGameObject(gameActorSpot);
    }

    for (let i = 0; i < this._validClones; i++) {
      const gameActor = LoadActor(1000 + i, 100 + i * 160, 50, 1 + (i % 2));
      this.addGameObject(gameActor);
    }

    for (let i = 0; i < this._zombieClones; i++) {
      const gameActor = LoadActor(1000 + i, 100 + i * 160, 150, 3);
      this.addGameObject(gameActor);
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
