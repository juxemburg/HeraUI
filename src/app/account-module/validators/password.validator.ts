import { ValidatorFn, AbstractControl } from '@angular/forms';


export function ValidatePasswordFactory(): ValidatorFn {
    return (control: AbstractControl) => {
        const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(control.value);

        return valid ? null : { password: { valid: valid } };
    };
}
