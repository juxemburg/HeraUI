import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true
    }
  ]
})
export class ToggleButtonComponent implements OnInit, ControlValueAccessor {

  @Input()
  public btnClass = '';

  @Input()
  public btnIconOn = 'toggle-on';

  @Input()
  public btnIconOff = 'toggle-off';

  public icon = '';

  public value = false;
  public set state(val: boolean) {
    this.value = val;
    this.icon = this.value ? this.btnIconOn : this.btnIconOff;
  }
  public disabled = false;

  public onChanged = (val: boolean) => { };
  public onTouched = () => { };

  constructor() { }

  ngOnInit() {
    this.state = false;
  }

  toggle() {
    this.writeValue(!this.value);
  }

  writeValue(obj: any): void {
    this.state = <boolean>obj;
    this.onChanged(this.value);
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
