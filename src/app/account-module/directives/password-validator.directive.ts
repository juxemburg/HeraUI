import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { ValidatePasswordFactory } from '../validators/password.validator';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }
  ]
})
export class PasswordValidatorDirective implements Validator {

  private _validatorFn: ValidatorFn;

  constructor() {
    this._validatorFn = ValidatePasswordFactory();
  }

  validate(c: AbstractControl): ValidationErrors {
    return this._validatorFn(c);
  }

}
