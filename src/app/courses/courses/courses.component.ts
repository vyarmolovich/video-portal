import { Component, OnInit } from '@angular/core';
import { CoursesDeleteDialogComponent } from '../courses-delete-dialog/courses-delete-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { Router } from '@angular/router';
import { COURSES_PATH } from 'src/app/app-routing.module';
import { Observable } from 'rxjs';
import { selectAuthState, State, selectCoursesState } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { GetList, Search, Delete } from 'src/app/+state/actions/courses.actions';
import { CoursesState, PAGE_SIZE } from 'src/app/+state/reducers/courses.reducer';


@Component({
  selector: 'vp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  deleteDialogRef: MatDialogRef<CoursesDeleteDialogComponent>;

  public courses: CoursesListItem[];
  public pageSize: number;

  public isAuth: boolean;

  authState$: Observable<any>;
  coursesState$: Observable<CoursesState>;

  constructor(private store: Store<State>, private router: Router, private dialog: MatDialog) {

    this.authState$ = this.store.select(selectAuthState);
    this.coursesState$ = this.store.select(selectCoursesState);
  }

  
  ngOnInit() {
    this.authState$.subscribe((state) => {
      this.isAuth = state.isAuthenticated;
    });

    this.coursesState$.subscribe((state) => {
      this.courses = state.courses;
      this.pageSize = state.pageSize;
    })

    this.getCourses();
  }

  searchCourseByTitle(event: string) {
    this.store.dispatch(new Search(event));
  }
  
  deleteCourse(item: CoursesListItem) {
    if (!this.isAuth) { 
      this.router.navigate([COURSES_PATH.login]);
      return; 
    }

    this.deleteDialogRef = this.dialog.open(CoursesDeleteDialogComponent, {
      height: '212px',
      width: '394px',
      data: {title: item.title}
    });

    this.deleteDialogRef
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.store.dispatch(new Delete(item));
          this.getCourses();
        }
      });
  }

  editCourse(id: number) {
    this.router.navigate([COURSES_PATH.courses + '/' + id]);
  }

  getCourses() {
    this.store.dispatch(new GetList(this.pageSize));
  }

  loadMore() {
    this.pageSize = this.pageSize + PAGE_SIZE;
    this.getCourses();
  }
}
