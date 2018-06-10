import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-required-input',
  templateUrl: './required-input.component.html',
  styleUrls: ['./required-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RequiredInputComponent),
      multi: true
    }
  ]
})
export class RequiredInputComponent implements OnInit, ControlValueAccessor {

  @Input()
  public labelName: string;

  @Input()
  public icon: string;

  @Input()
  public type: string;

  @Input()
  public disabled = false;

  @Input()
  public name: string;

  public inputValue: any;

  public get value(): any {
    return this.inputValue;
  }

  private onChanged: (any) => void;
  private onTouched: (any) => void;


  constructor() { }

  ngOnInit() {
  }

  public textChanged() {
    this.onChanged(this.value);
  }

  writeValue(obj: any): void {
    console.log(obj);
    this.inputValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
