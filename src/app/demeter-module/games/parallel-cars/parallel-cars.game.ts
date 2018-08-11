import { Game } from '../game.game';
import { Car } from './game-objects/car.gameobject';

export class ParallelCarsGame extends Game {
    public onLoaded$;


    constructor(canvasId: string) {
        super(canvasId);
        this.addGameObject(new Car(100, 100, 0.5));
        this.addGameObject(new Car(100, 200, 3));
    }

    public Load(): void {
        super.Load();
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
