import { Directive, Input, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Validator, ValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { ValidateMinFactory } from '../validators/number.validators';

@Directive({
  selector: '[appMinValidation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MinValidationDirective, multi: true }
  ]
})
export class MinValidationDirective implements Validator, AfterViewInit {


  @Input()
  public minValue: number;

  private _validatorFn: ValidatorFn;

  constructor() {

  }

  ngAfterViewInit(): void {
    this._validatorFn = ValidateMinFactory(this.minValue);
  }

  validate(c: AbstractControl): ValidationErrors {
    return this._validatorFn ? this._validatorFn(c) : null;
  }

}
