import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ParallelCarsGame } from '../game-engine/games/parallel-cars/parallel-cars.game';
import { interval, timer } from '../../../../node_modules/rxjs';
import { takeUntil } from '../../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-parallel-cars',
  templateUrl: './parallel-cars.component.html',
  styleUrls: ['./parallel-cars.component.scss']
})
export class ParallelCarsComponent implements OnInit, AfterViewInit {

  @Input()
  public threadCount = 0;

  private game: ParallelCarsGame;
  public isLoading = true;
  public started = false;

  public gameScore = 0;

  public seconds = 10;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.game = new ParallelCarsGame('game-canvas', this.threadCount);
    this.game.Load()
      .subscribe(_ => this.isLoading = false);

    interval(1000).pipe(takeUntil(timer(11500)))
      .subscribe(_ => {
        this.seconds--;
        if (this.seconds <= 0) {
          this.game.End();
          this.seconds = 0;
        }
      });

    this.game.onScoreChanged$.subscribe(val => this.gameScore = val);
  }

  public start() {
    this.started = true;
    this.game.Start();
  }
}
