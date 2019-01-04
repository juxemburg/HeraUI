import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable, zip, timer, interval } from 'rxjs';
import { textureLoader } from '../game-engine/games/parallel-cars/parallel-cars.loader';
import { takeUntil, map } from 'rxjs/operators';
import { AbandonedBlocks } from '../game-engine/games/abandoned-blocks/abandoned-blocks.game';

@Component({
  selector: 'app-abandoned-blocks',
  templateUrl: './abandoned-blocks.component.html',
  styleUrls: ['./abandoned-blocks.component.scss']
})
export class AbandonedBlocksComponent implements OnInit, AfterViewInit {
  @Input() totalScripts: number;

  @Input() unusedScripts: number;

  @Output() onFinished = new EventEmitter<number>();

  private _gameTimer$: Observable<any>;
  private _remainingTime$: Observable<number>;
  private game: AbandonedBlocks;
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
    zip(textureLoader.LoadTexture('houses_spritesheet')).subscribe(_ => {
      this.game = new AbandonedBlocks(
        'game-canvas',
        this.totalScripts,
        this.unusedScripts
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
