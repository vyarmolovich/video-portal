import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { Observable, of } from 'rxjs';
import { State, getSelected } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { GetOne, Update, Create } from 'src/app/+state/actions/courses.actions';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'vp-courses-add-or-edit',
  templateUrl: './courses-add-or-edit.component.html',
  styleUrls: ['./courses-add-or-edit.component.css']
})
export class CoursesAddOrEditComponent implements OnInit {

  coursesForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    creationDate: ['', [Validators.required, Validators.pattern(/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g)]],
    duration: ['', [Validators.required, Validators.pattern(/^[0-9.]+$/g)]],
    authors: ['', [Validators.required]]
  });

  item$: Observable<CoursesListItem>;

  itemId: number;
  
  constructor(private fb: FormBuilder, private store: Store<State>, private route: ActivatedRoute, private router: Router) {
    this.route.params.forEach(
      (params: Params) => {
        if (params['id'] !== undefined) {
          this.itemId = params['id'];

          this.item$ = this.store.select(getSelected);

          this.store.dispatch(new GetOne(this.itemId));
        } else {
          this.item$ = of({
              id: -1,
              title: '',
              creationDate: new Date(),
              duration: 0,
              description: '',
              topRated: false,
              authors: []
          });
        }
      }
    );
  }

  ngOnInit() {
    this.item$.subscribe(
      (item) => {
        if (item != null) {
          this.coursesForm.patchValue({
              title: item.title,
              description: item.description,
              creationDate: item.creationDate,
              duration: item.duration,
              authors: item.authors
          });
        }
      });
  }

  get title() {
    return this.coursesForm.get('title');
  }

  get description() {
    return this.coursesForm.get('description');
  }

  onSubmit() {
    if (this.itemId != null) {
      this.store.dispatch(new Update(this.coursesForm.value))
    } else {
      this.store.dispatch(new Create(this.coursesForm.value))
    }

    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
