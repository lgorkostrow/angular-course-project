import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessagesService} from "../../../../core/services/validation-messages.service";
import {firstLetterUpperCase} from "../../../../core/validators/first-letter.upper-case.validator";
import {PersonalInformation} from "../../../models/personal-information.model";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<PersonalInformation>();

  form: FormGroup = this.formBuilder.group({
    'firstName': ['', [Validators.required, firstLetterUpperCase]],
    'lastName': ['', [Validators.required, firstLetterUpperCase]],
    'email': ['', [Validators.required, Validators.email]],
    'phones': this.formBuilder.array([
      this.createPhoneControl(),
    ]),
    'shipping': [false],
  });

  validationErrorMessages: { [key: string]: string } = this.validationMessagesService.defaultMessages;

  get firstNameControl(): FormControl {
    return this.form.get('firstName') as FormControl;
  };

  get lastNameControl(): FormControl {
    return this.form.get('lastName') as FormControl;
  };

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  };

  get phonesControl(): FormArray {
    return this.form.get('phones') as FormArray;
  };

  get shippingControl(): FormControl {
    return this.form.get('shipping') as FormControl;
  };

  constructor(
    private formBuilder: FormBuilder,
    private validationMessagesService: ValidationMessagesService,
  ) {
  }

  ngOnInit(): void {
    this.shippingControl.valueChanges.subscribe((newValue: boolean) => {
      if (newValue) {
        this.form.addControl('address', new FormControl('', Validators.required));
        this.form.get('address')?.updateValueAndValidity();
      } else {
        this.form.removeControl('address');
      }
    });
  }

  addPhone(): void {
    this.phonesControl.push(
      this.createPhoneControl(),
    );
  }

  removePhone(): void {
    if (this.phonesControl.controls.length === 1) {
      return;
    }

    this.phonesControl.removeAt(this.phonesControl.controls.length - 1);
  }

  onSubmit(form: FormGroup): void {
    this.formSubmitted.emit(form.value);
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }

  private createPhoneControl(): FormControl {
    return new FormControl(null, Validators.required);
  }
}
