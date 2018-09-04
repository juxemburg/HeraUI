import { Car } from './game-objects/car.gameobject';
import { Game } from '../../game.game';
import { Lane } from './game-objects/lane.gameobject';
import { Observable, Subject } from 'rxjs';
import { Package } from './game-objects/package.gameobject';
import { LoadCar, LoadPackage } from './parallel-cars.loader';

export class ParallelCarsGame extends Game {

    private _onScoreChanged = new Subject<number>();
    public onScoreChanged$ = this._onScoreChanged.asObservable();

    private _transportedPackages = 0;
    private set transportedPackages(val: number) {
        this._transportedPackages = val;
        this._onScoreChanged.next(this._transportedPackages);
    }
    private get transportedPackages(): number {
        return this._transportedPackages;
    }

    private _carLanes = new Map<number, Car[]>();
    private _packages: Package[] = [];

    constructor(canvasId: string, threadCount: number) {
        super(canvasId);
        const suggestedThreads = 4;
        const usedThreads = Math.min(threadCount, 10);
        const boxCount = 20;

        for (let i = 0; i < boxCount; i++) {
            const gamePackage = LoadPackage(1000 + i, 1165, 0 + (i * 35));
            this.addGameObject(gamePackage);
            this._packages.push(gamePackage);
        }

        for (let i = 0; i < suggestedThreads; i++) {
            this.addGameObject(new Lane(i, 60, 10 + (120 * i), 1100, 90));
        }

        for (let i = 0; i < usedThreads; i++) {
            const lane = i % suggestedThreads;
            const car = LoadCar(
                100 + i,
                100 + (60 * i),
                30 + (120 * (lane)),
                1 + Math.random() * 3);

            this.addGameObject(car);
            this.addCar(lane, car);
        }
    }

    private addCar(lane: number, car: Car) {
        if (!this._carLanes.get(lane)) {
            this._carLanes.set(lane, []);
        }
        this._carLanes.get(lane).push(car);
        car.onPackageReceived$.subscribe(_ => this.pickUpPackage());
        car.onPackageDelivered$.subscribe(_ => {
            this.transportedPackages++;
            this.deliverPackage();
        });
    }

    public Load(): Observable<any> {
        super.Load();
        setTimeout(() => this._onLoadSource.next(true), 200);
        return this.onLoaded$;
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

    private pickUpPackage() {
        const pkg = this._packages.filter(item => !item.pickedUp && !item.delivered)[0];
        if (pkg) {
            pkg.PickUp();
        }
    }

    private deliverPackage() {
        const pkg = this._packages.filter(item => item.pickedUp)[0];
        if (pkg) {
            pkg.Deliver();
        }
    }


}
