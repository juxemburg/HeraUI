import { ValidatorFn, AbstractControl } from '@angular/forms';


export function ValidateMinFactory(minValue: number): ValidatorFn {
    return (control: AbstractControl) => {
        if (!isNaN(control.value)) {
            return minValue <= parseInt(control.value, 10) ? null : { password: { valid: false } };
        }
        return { password: { valid: false } };
    };
}


export function ValidateMaxFactory(maxValue: number): ValidatorFn {
    return (control: AbstractControl) => {
        if (!isNaN(control.value)) {
            return maxValue >= parseInt(control.value, 10) ? null : { password: { valid: false } };
        }
        return { password: { valid: false } };
    };
}
