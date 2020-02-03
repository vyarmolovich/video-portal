import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { Observable, of } from 'rxjs';
import { State, getSelected } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { GetOne, Update, Create } from 'src/app/+state/actions/courses.actions';

@Component({
  selector: 'vp-courses-add-or-edit',
  templateUrl: './courses-add-or-edit.component.html',
  styleUrls: ['./courses-add-or-edit.component.css']
})
export class CoursesAddOrEditComponent implements OnInit {

  public item$: Observable<CoursesListItem>;

  itemId: number;

  faCalendar = faCalendar;  
  
  constructor(private store: Store<State>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.forEach(
        (params: Params) => {
          if (params['id'] !== undefined) {
            this.itemId = params['id'];

            this.store.dispatch(new GetOne(this.itemId));

            this.item$ = this.store.select(getSelected);
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

  save() {
    this.item$.subscribe((item) => {
      if (this.itemId != null) {
        this.store.dispatch(new Update(item))
      } else {
        this.store.dispatch(new Create(item))
      }
    });
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
