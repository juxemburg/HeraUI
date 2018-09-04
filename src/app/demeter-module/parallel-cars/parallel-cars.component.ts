import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ParallelCarsGame } from '../game-engine/games/parallel-cars/parallel-cars.game';
import { interval, timer, forkJoin, of, zip } from 'rxjs';
import { takeUntil } from '../../../../node_modules/rxjs/operators';
import { textureLoader } from '../game-engine/games/parallel-cars/parallel-cars.loader';


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

  public seconds = 20;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    textureLoader.clear();
    zip(textureLoader.LoadTexture('car'),
      textureLoader.LoadTexture('package'))
      .subscribe(_ => {
        console.log('Textures loaded');
        this.game = new ParallelCarsGame('game-canvas', this.threadCount);
        // tslint:disable-next-line:no-shadowed-variable
        this.game.Load().subscribe(_ => this.isLoading = false);
        this.game.onScoreChanged$.subscribe(val => this.gameScore = val);
      });

    interval(1000).pipe(takeUntil(timer(21500)))
      .subscribe(_ => {
        this.seconds--;
        if (this.seconds <= 0) {
          this.game.End();
          this.seconds = 0;
        }
      });
  }

  public start() {
    this.started = true;
    this.game.Start();
  }
}
