import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CtValidators {

  static startWithSpace(control: AbstractControl): ValidationErrors | null {
    const value = control?.value;
    if ( typeof value === 'string' && value.charAt(0) === ' ' ) {
      return { startWithSpace: true };
    }
    return null;
  }

  static phoneValidator(control: AbstractControl): ValidationErrors | null {
      const value = control?.value;
      if (!value) {
        return null;
      }
      const phoneRegex = /^\+?[1-9]\d{9,14}$/;
      const isValid = phoneRegex.test(value);
      return isValid ? null : { invalidPhone: true };
  }

}
