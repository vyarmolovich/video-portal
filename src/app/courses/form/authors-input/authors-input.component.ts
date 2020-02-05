import { Component, OnInit, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator, FormBuilder, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { CoursesAuthor } from '../../courses-list-item/courses-author-model';

@Component({
  selector: 'vp-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true     
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true,
    } 
  ]
})
export class AuthorsInputComponent implements OnInit, ControlValueAccessor, Validator {
  @ViewChild('tagInput', { static: true }) 
  tagInputRef: ElementRef;

  authorsForm = this.fb.group({
    authors: ['']
  });
  
  tags: string[] = [];

  control: AbstractControl;

  public disabled: boolean;

  public formatedDuration: string = '';  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.authorsForm.controls.authors.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.authorsForm.controls.tag.setValue('');
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !this.tags.find(t => t == tag)) {
      this.tags.push(tag);
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    } else {
      this.tags.splice(-1);
    }
  }


  onChanged: any = () => {}

  onTouched: any = () => {}

  writeValue(authors: CoursesAuthor[]) {
    if (authors) {
      this.tags = authors.map((author) => {
             return author.name + ' ' + author.lastName;
          });
    }
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.control && this.authorsForm.get('authors')) {
      this.control = control;
      this.authorsForm.get('authors').setValidators(this.control.validator);
    }

    return null;
  }

}
