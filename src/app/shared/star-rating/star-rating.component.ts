import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
  public stars: number[] = [0, 1, 2, 3, 4];
  private _starCount = 5;
  public get starCount(): number {
    return this._starCount;
  }
  @Input()
  public set starCount(v: number) {
    this._starCount = v;
    this.stars = [...Array.from(Array(v).keys())];
  }

  @Input() size = 'md';

  @Input() color = 'text-warning';

  public selectedValue = 0;

  public onChanged = (val: number) => {};
  public onTouched = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(obj: any): void {
    if (isNaN(obj)) {
      return;
    }
    this.selectedValue = <number>obj;
    this.onChanged(this.selectedValue);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public outline(index: number): string {
    return index >= this.selectedValue ? 'far' : 'fa';
  }
}
