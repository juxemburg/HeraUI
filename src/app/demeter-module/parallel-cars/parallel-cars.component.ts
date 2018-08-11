import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ParallelCarsGame } from '../games/parallel-cars/parallel-cars.game';



@Component({
  selector: 'app-parallel-cars',
  templateUrl: './parallel-cars.component.html',
  styleUrls: ['./parallel-cars.component.scss']
})
export class ParallelCarsComponent implements OnInit, AfterViewInit {

  private game: ParallelCarsGame;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.game = new ParallelCarsGame('game-canvas');
    this.game.Load();
    setTimeout(() => {
      this.start();
    }, 300);
  }

  public start() {
    this.game.Start();
  }
}
