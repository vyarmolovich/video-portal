import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors.service';
import { AuthorsActionTypes, Search, SearchSuccess } from '../actions/authors.actions';

@Injectable()
export class AuthorsEffects {
  constructor(
    private actions: Actions,
    private authorsService: AuthorsService
  ) {}

  @Effect()
  Search: Observable<any>  = this.actions.pipe(
    ofType(AuthorsActionTypes.SEARCH),
    map((action: Search) => action.payload),
    switchMap(payload => {
      return this.authorsService.getList(payload).pipe(
        map((authors) => { 
            return new SearchSuccess(authors);
        })
      );
    })
  );

}