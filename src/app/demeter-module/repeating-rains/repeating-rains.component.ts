import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable, zip, timer, interval } from 'rxjs';
import { CloningTroubleGame } from '../game-engine/games/cloning-trouble/cloning-trouble.game';
import { textureLoader } from '../game-engine/games/parallel-cars/parallel-cars.loader';
import { takeUntil, map } from 'rxjs/operators';
import { RepeatingRains } from '../game-engine/games/repeating-rains/repeating-rains.game';

@Component({
  selector: 'app-repeating-rains',
  templateUrl: './repeating-rains.component.html',
  styleUrls: ['./repeating-rains.component.scss']
})
export class RepeatingRainsComponent implements OnInit, AfterViewInit {
  @Input() usedLoops = 0;
  @Input() duplicateScripts = 0;

  @Input() param1 = 0;
  @Input() param2 = 0;
  @Input() param3 = 0;

  @Output() onFinished = new EventEmitter<number>();

  private _gameTimer$: Observable<any>;
  private _remainingTime$: Observable<number>;
  private game: RepeatingRains;
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
      textureLoader.LoadTexture('mouses_spritesheet'),
      textureLoader.LoadTexture('cicles_spritesheet')
    ).subscribe(_ => {
      this.game = new RepeatingRains(
        'game-canvas',
        this.param1, // required loops
        this.param2, // max alllowed loops
        this.param3, // min allowed loops
        this.usedLoops, // used loops
        this.duplicateScripts // closed invalid loops
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
