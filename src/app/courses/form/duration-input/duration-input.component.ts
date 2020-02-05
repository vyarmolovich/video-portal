import { Component, forwardRef, OnInit } from '@angular/core';
import { DurationPipe } from '../../courses-list-item/duration.pipe';
import { FormBuilder, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms';

@Component({
  selector: 'vp-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true     
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    } 
  ]
})
export class DurationInputComponent implements OnInit, ControlValueAccessor, Validator {

  durationForm = this.fb.group({
    duration: ['']
  });
  
  control: AbstractControl;

  public disabled: boolean;

  public formatedDuration: string = '';  

  constructor(private fb: FormBuilder, private durationPipe: DurationPipe) {}

  ngOnInit(): void {
    this.durationForm.get('duration').valueChanges.subscribe(
      value => {
        this.formatedDuration = this.durationPipe.transform(value);
    });
  }

  onTouched: any = () => {}

  writeValue(value) {
    if (value) {
      this.durationForm.patchValue({ duration: value });
      this.formatedDuration = this.durationPipe.transform(value);
    }
  }

  registerOnChange(fn: any) {
    this.durationForm.get('duration').valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.control && this.durationForm.get('duration')) {
      this.control = control;
      this.durationForm.get('duration').setValidators(this.control.validator);
    }

    return null;
  }

}
