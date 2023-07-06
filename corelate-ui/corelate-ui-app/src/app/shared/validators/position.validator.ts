import { AbstractControl, ValidatorFn } from '@angular/forms';

export class PositionValidator {

  static NoRepeat(key: string): ValidatorFn {
    return (AC: AbstractControl): { [key: string]: boolean } =>
    {
      const items = AC.get(key).value;
      const positions = items.map(item => item.position);
      if ((new Set(positions)).size !== positions.length) {
        return { 'NoRepeat': true };
      }
        return null;
    }
  }
}
