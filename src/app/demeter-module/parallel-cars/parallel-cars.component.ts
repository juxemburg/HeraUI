import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { ParallelCarsGame } from '../game-engine/games/parallel-cars/parallel-cars.game';
import { interval, timer, zip, Observable } from 'rxjs';
import { takeUntil, filter, tap, map } from 'rxjs/operators';
import { textureLoader } from '../game-engine/games/parallel-cars/parallel-cars.loader';

@Component({
  selector: 'app-parallel-cars',
  templateUrl: './parallel-cars.component.html',
  styleUrls: ['./parallel-cars.component.scss']
})
export class ParallelCarsComponent implements OnInit, AfterViewInit {
  @Input()
  public threadCount = 0;

  @Input()
  public param1 = 4;

  @Output()
  public onFinished = new EventEmitter<number>();

  private _gameTimer$: Observable<any>;
  private _remainingTime$: Observable<number>;
  private game: ParallelCarsGame;
  public isLoading = true;
  public started = false;

  public gameScore = 0;

  public seconds = 30000;
  private _remainingTime = 30;
  public get remainingTime(): number {
    return this._remainingTime;
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    textureLoader.clear();
    zip(
      textureLoader.LoadTexture('car_left'),
      textureLoader.LoadTexture('car_right'),
      textureLoader.LoadTexture('package'),
      textureLoader.LoadTexture('cars_spritesheet')
    ).subscribe(_ => {
      console.log('Textures loaded');
      this.game = new ParallelCarsGame(
        'game-canvas',
        this.threadCount,
        this.param1
      );
      // tslint:disable-next-line:no-shadowed-variable
      this.game.Load().subscribe(_ => (this.isLoading = false));
      this.game.onScoreChanged$.subscribe(val => (this.gameScore = val));
    });
  }

  public start() {
    this.started = true;
    this._remainingTime$ = timer(this.seconds);
    this._gameTimer$ = interval(1000).pipe(takeUntil(this._remainingTime$));
    this.game.Start();
    this._gameTimer$
      .pipe(map(time => time + 1))
      .subscribe(time => (this._remainingTime = this.seconds / 1000 - time));
    this._remainingTime$.subscribe(_ => {
      const finalScore = (this.gameScore / (3 * this.param1)) * 5;
      this.onFinished.emit(finalScore);
      this._remainingTime = 0;
      this.game.End();
    });
  }
}
