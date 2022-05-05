import {AbstractControl} from "@angular/forms";

export function firstLetterUpperCase(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  const firstCharacter: string = control.value[0];
  if (firstCharacter.toUpperCase() !== firstCharacter) {
    return { firstLetterUpperCase: true };
  }

  return null;
}
