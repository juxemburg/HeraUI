import { Directive, Input, AfterViewInit } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { ValidateMaxFactory } from '../validators/number.validators';

@Directive({
  selector: '[appMaxValidation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaxValidationDirective, multi: true }
  ]
})
export class MaxValidationDirective implements Validator, AfterViewInit {


  @Input()
  public maxValue: number;

  private _validatorFn: ValidatorFn;

  constructor() {

  }
  ngAfterViewInit(): void {
    this._validatorFn = ValidateMaxFactory(this.maxValue);
  }

  validate(c: AbstractControl): ValidationErrors {
    return this._validatorFn ? this._validatorFn(c) : null;
  }

}
