import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import { Observable, zip, timer, interval } from 'rxjs';
import { ParallelCarsGame } from '../game-engine/games/parallel-cars/parallel-cars.game';
import { map, takeUntil } from 'rxjs/operators';
import { textureLoader } from '../game-engine/games/parallel-cars/parallel-cars.loader';
import { CloningTroubleGame } from '../game-engine/games/cloning-trouble/cloning-trouble.game';

@Component({
  selector: 'app-cloning-trouble',
  templateUrl: './cloning-trouble.component.html',
  styleUrls: ['./cloning-trouble.component.scss']
})
export class CloningTroubleComponent implements OnInit, AfterViewInit {
  @Input() cloneCount = 0;
  @Input() cloneRemovalCount = 0;

  @Input() param1 = 0;
  @Input() param2 = 0;
  @Input() param3 = 0;

  @Output() onFinished = new EventEmitter<number>();

  private _gameTimer$: Observable<any>;
  private _remainingTime$: Observable<number>;
  private game: CloningTroubleGame;
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
      textureLoader.LoadTexture('cars_spritesheet'),
      textureLoader.LoadTexture('mouses_spritesheet')
    ).subscribe(_ => {
      this.game = new CloningTroubleGame(
        'game-canvas',
        this.param1, // required clones
        this.param2, // max alllowed clones
        this.param3, // variable count
        this.cloneCount, // used clones
        this.cloneRemovalCount // closed clones
      );
      this.game.Load().subscribe(val => (this.isLoading = false));
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
      const finalScore = (this.gameScore / (3 * 4)) * 5;
      this.onFinished.emit(finalScore);
      this._remainingTime = 0;
      this.game.End();
    });
  }
}
