import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-validation-error-message',
  templateUrl: './validation-error-message.component.html',
  styleUrls: ['./validation-error-message.component.scss']
})
export class ValidationErrorMessageComponent implements OnInit {
  @Input('formControlItem') formControl!: AbstractControl;
  @Input() validationErrorMessages: {[key: string]: string} = {};

  constructor() { }

  ngOnInit(): void {
  }

  errorMessage(): string {
    if (Object.keys(this.formControl.errors!).length === 0) {
      throw Error('No errors were found');
    }

    const firstError = Object.keys(this.formControl.errors!)[0];

    return this.validationErrorMessages[firstError] ?? 'Invalid value'
  }
}
