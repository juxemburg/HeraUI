import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-progress',
  templateUrl: './item-progress.component.html',
  styleUrls: ['./item-progress.component.scss']
})
export class ItemProgressComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public value: number;

  @Input()
  public total = 100;

  get progresStyle(): any {
    return {
      'width': `${this.percentage}%`
    }
  }

  get percentage(): number {
    if (!this.total) {
      return 0;
    }

    return Math.round((this.value / this.total) * 100);
  }

  get progressClass(): string {
    switch (true) {
      case (this.percentage < 20):
        return 'bg-danger';
      case (this.percentage < 35):
        return 'bg-warning';
      case (this.percentage < 45):
        return 'bg-info';
      case (this.percentage > 45):
        return 'bg-success';
      default:
        return '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
