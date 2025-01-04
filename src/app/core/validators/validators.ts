import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CtValidators {

  static startWithSpace(control: AbstractControl): ValidationErrors | null {
    const value = control?.value;
    if ( typeof value === 'string' && value.charAt(0) === ' ' ) {
      return { startWithSpace: true };
    }
    return null;
  }

}
