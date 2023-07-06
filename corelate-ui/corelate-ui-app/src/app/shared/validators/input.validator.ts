import { AbstractControl, ValidatorFn } from '@angular/forms';

export class InputValidator {

  static NumberMinMax(min: number, max: number): ValidatorFn {
    return (AC: AbstractControl): { [key: string]: boolean } => {
      if (AC.value && (isNaN(AC.value) || AC.value < min || AC.value > max)) {
        return { 'NumberMinMax': true };
      }
      return null;
    };
  }

  static NumberMin(min: number): ValidatorFn {
    return (AC: AbstractControl): { [key: string]: boolean } => {
      if (AC.value < min) {
        return { 'NumberMin': true };
      }
      return null;
    };
  }
}
