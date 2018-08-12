import { Car } from './game-objects/car.gameobject';
import { Game } from '../../game.game';
import { Lane } from './game-objects/lane.gameobject';

export class ParallelCarsGame extends Game {
    public onLoaded$;

    private _carLanes = new Map<number, Car[]>();

    constructor(canvasId: string) {
        super(canvasId);
        const suggestedThreads = 4;
        const usedThreads = 6;

        for (let i = 0; i < suggestedThreads; i++) {
            this.addGameObject(new Lane(i, 60, 10 + (120 * i), 1100, 90));
        }

        for (let i = 0; i < usedThreads; i++) {
            const lane = i % suggestedThreads;
            const car = new Car(
                100 + i,
                100 + (60 * i),
                30 + (120 * (lane)),
                Math.random() * 5);

            this.addGameObject(car);
            this.addCar(lane, car);
        }
    }

    private addCar(lane: number, car: Car) {
        if (!this._carLanes.get(lane)) {
            this._carLanes.set(lane, []);
        }

        this._carLanes.get(lane).push(car);
    }

    public Load(): void {
        super.Load();
    }
    protected Update(): void {
        this._carLanes.forEach((cars, lane, map) => {
            cars.forEach(car => car.CheckCollision(cars));
        })
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
