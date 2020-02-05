import { Component, OnInit, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator, FormBuilder, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { CoursesAuthor } from '../../courses-list-item/courses-author-model';
import { State, selectAuthorsState } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { AuthorsState } from 'src/app/+state/reducers/authors.reducer';
import { Observable, BehaviorSubject } from 'rxjs';
import { Search } from 'src/app/+state/actions/authors.actions';
import { filter, debounceTime } from 'rxjs/operators';

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

  authorsState$: Observable<AuthorsState>;

  authorsResult$: BehaviorSubject<CoursesAuthor[]> = new BehaviorSubject <CoursesAuthor[]>([]);

  control: AbstractControl;

  public options: CoursesAuthor[];

  public disabled: boolean;

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.authorsState$ = this.store.select(selectAuthorsState);
  }

  ngOnInit(): void {
    this.authorsState$.subscribe((state) => {
      if (state.authors.length == 1) {
        this.addTag(state.authors[0]);
        this.authorsForm.get('authors').setValue('');
        this.options = [];
      } else {
        this.options = state.authors;
      }
    })

    this.authorsForm.get('authors').valueChanges
      .pipe(
        filter((s: string) => s.length > 1),
        debounceTime(400))
      .subscribe(value => {
        this.store.dispatch(new Search((value)));  
      });
  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.authorsForm.get('authors').value;
    if (event.code === 'Backspace' && !inputValue) {
      // TODO: uncoment if tag shold be removed by backspace
      // this.removeTag();
      return;
    }
  }

  removeTag(author?:  CoursesAuthor): void {
    let index = -1;
    if (!!author) {
      index = this.authorsResult$.value.indexOf(author);
    } 

    this.authorsResult$.value.splice(index, 1);
    this.authorsResult$.next(this.authorsResult$.value);
  }

  addTag(author: CoursesAuthor) {
    let tags = this.authorsResult$.value;

    if (!tags.find(t => t == author)) {
      this.authorsResult$.next(this.authorsResult$.value.concat(author));
    }
  }

  onTouched: any = () => {}

  writeValue(authors: CoursesAuthor[]) {
    if (authors) {
      this.authorsResult$.next(this.authorsResult$.value.concat(authors));
    }
  }

  registerOnChange(fn: any) {
    this.authorsResult$.subscribe(fn);
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
