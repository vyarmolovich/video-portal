import { Injectable } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CoursesActionTypes, GetList, GetOne, Update, Delete, Create, Search, GetListSuccess, SearchSuccess, GetOneSuccess, DeleteSuccess, CreateSuccess, UpdateSuccess } from '../actions/courses.actions';
import { map, switchMap } from 'rxjs/operators';
import { PAGE_SIZE } from '../reducers/courses.reducer';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions: Actions,
    private coursesService: CoursesService
  ) {}

  @Effect()
  GetList: Observable<any>  = this.actions.pipe(
    ofType(CoursesActionTypes.GETLIST),
    map((action: GetList) => action.payload),
    switchMap(payload => {
      return this.coursesService.getList(null, payload).pipe(
        map((courses) => { 
            return new GetListSuccess(courses);
        })
      );
    })
  );

  @Effect()
  GetOne: Observable<any>  = this.actions.pipe(
    ofType(CoursesActionTypes.GETONE),
    map((action: GetOne) => action.payload),
    switchMap(payload => {
      return this.coursesService.getItemById(payload).pipe(
        map((coursesItem) => { 
          return new GetOneSuccess(coursesItem);
        })
      );
    })
  );

  @Effect()
  Update: Observable<any>  = this.actions.pipe(
    ofType(CoursesActionTypes.UPDATE),
    map((action: Update) => action.payload),
    switchMap(payload => {
      return this.coursesService.updateItem(payload).pipe(
        map((coursesItem) => {
          return new UpdateSuccess(coursesItem);
        })
      );
    })
  );

  @Effect({ dispatch: false })
  Delete: Observable<any>  = this.actions.pipe(
    ofType(CoursesActionTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(payload => {
        return this.coursesService.removeItem(payload).pipe(
          map((result) => { 
            return new DeleteSuccess(result);
          })
        );
    })
  );

  @Effect({ dispatch: false })
  Create: Observable<any>  = this.actions.pipe(
    ofType(CoursesActionTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap(payload => {
        return this.coursesService.createCourse(payload).pipe(
          map((newItem) => { 
            return new CreateSuccess(newItem);
          })
        );
    })
  );

  @Effect()
  Search: Observable<any>  = this.actions.pipe(
    ofType(CoursesActionTypes.SEARCH),
    map((action: Search) => action.payload),
    switchMap(payload => {
      return this.coursesService.getList(payload, PAGE_SIZE).pipe(
        map((courses) => { 
            return new SearchSuccess(courses);
        })
      );
    })
  );

}