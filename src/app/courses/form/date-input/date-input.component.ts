import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS, ValidationErrors, AbstractControl, FormBuilder } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'vp-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => DateInputComponent),
      multi: true     
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    } 
  ]
})
export class DateInputComponent implements ControlValueAccessor, Validator {

  dateForm = this.fb.group({
    date: ['']
  });
  
  control: AbstractControl;

  public disabled: boolean;

  public faCalendar = faCalendar;  

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  onTouched: any = () => {}

  writeValue(value) {
    value && this.dateForm.patchValue({ date: this.datePipe.transform(value, 'dd/MM/yyyy') });
  }

  registerOnChange(fn: any) {
    this.dateForm.get('date').valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.control && this.dateForm.get('date')) {
      this.control = control;
      this.dateForm.get('date').setValidators(this.control.validator);
    }

    return null;
  }
}
