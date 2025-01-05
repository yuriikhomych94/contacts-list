import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages } from '../../../core/validators/validators.message';
import { BaseComponent } from '../../../core/base/base.component';
import { takeUntil } from 'rxjs';
import { CtValidators } from '../../../core/validators/validators';
import { Contact } from '../../../contacts/types/contact';

@Component({
  selector: 'ct-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: [ './contacts-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFormComponent extends BaseComponent implements OnInit {

  @Input() title: string = '';
  @Input() initialData?: Contact;

  form!: FormGroup;

  readonly validationMessages = ValidationMessages;

  readonly months = [
    { value: 1, name: 'January', days: '31' },
    { value: 2, name: 'February', days: '28' },
    { value: 3, name: 'March', days: '31' },
    { value: 4, name: 'April', days: '30' },
    { value: 5, name: 'May', days: '31' },
    { value: 6, name: 'June', days: '30' },
    { value: 7, name: 'July', days: '31' },
    { value: 8, name: 'August', days: '31' },
    { value: 9, name: 'September', days: '30' },
    { value: 10, name: 'October', days: '31' },
    { value: 11, name: 'November', days: '30' },
    { value: 12, name: 'December', days: '31' },
  ];

  days: number[] = [];
  years: number[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  get canSave() {
    return this.form.valid && this.form.dirty;
  }

  hasError(controlName: string, validationType: string) {
    const formControl = this.form.get(controlName);
    return formControl?.hasError(validationType);
  }

  private initForm(): void {
    const currentContact = this.initialData || {} as Contact;
    this.form = new FormGroup({
      username: new FormControl(currentContact?.username || '', [ Validators.required, CtValidators.startWithSpace ]),
      lastname: new FormControl(currentContact?.lastname || '', [ Validators.required, CtValidators.startWithSpace ]),
      emailAddress: new FormControl(currentContact?.emailAddress || '', [ Validators.required, Validators.email ]),
      phone: new FormControl(currentContact?.phone || '', [Validators.required, CtValidators.phoneValidator]),
      birthday: new FormGroup({
        day: new FormControl(currentContact?.birthday?.day || '', Validators.required),
        month: new FormControl(currentContact?.birthday?.month || '', Validators.required),
        year: new FormControl(currentContact?.birthday?.year || '', Validators.required),
      }),
      address: new FormGroup({
        city: new FormControl(currentContact.address?.city || '', [ Validators.required, CtValidators.startWithSpace ]),
        region: new FormControl(currentContact.address?.region || '', [ Validators.required, CtValidators.startWithSpace ]),
        state: new FormControl(currentContact.address?.state || '', [ Validators.required, CtValidators.startWithSpace ]),
        street: new FormControl(currentContact.address?.street || '', [ Validators.required, CtValidators.startWithSpace ]),
      }),
    });
    this.initYears();
    this.updateDays();
    this.startBirthdayListenersChange();
  }

  private initYears(): void {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 101 }, (_, i) => currentYear - i);
  }

  private getBirthdayControls() {
    const birthdayGroup = this.form.get('birthday') as FormGroup;
    return {
      year: birthdayGroup.get('year')!,
      month: birthdayGroup.get('month')!,
      day: birthdayGroup.get('day')!
    };
  }

  private startBirthdayListenersChange(): void {
    const { year, month, day } = this.getBirthdayControls();
    [ year.valueChanges, month.valueChanges, day.valueChanges ].forEach(obs =>
      obs.pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.updateDays();
        this.setValidatorsForBirthday();
      })
    );

  }

  private updateDays(): void {
    const { year, month, day } = this.getBirthdayControls();

    let maxDays = 31;
    if ( month.value ) {
      const isLeapYear = this.isLeapYear(year.value);
      maxDays = +this.months.find(m => m.value === month.value)?.days!;
      if ( month.value === 2 && isLeapYear ) {
        maxDays = 29;
      }
    }
    this.days = Array.from({ length: maxDays }, (_, i) => i + 1);
    if ( day.value > maxDays ) {
      day.setValue(null);
    }
  }

  private setValidatorsForBirthday(): void {
    const { year, month, day } = this.getBirthdayControls();
    const today = new Date();
    const selectedDate = new Date(year.value, month.value - 1, day.value || 1);
    const controls = [ year, month, day ];
    controls.forEach(control => {
      const errors: any = {};
      if ( !control.value ) {
        errors['required'] = true;
      }
      if ( year.value && month.value && day.value ) {
        if ( selectedDate > today ) {
          errors['futureDate'] = true;
        }
      }
      control.setErrors(Object.keys(errors).length > 0 ? errors : null);
    });
  }

  private isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

}
