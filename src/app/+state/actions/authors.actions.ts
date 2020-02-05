import { Action } from '@ngrx/store';
import { CoursesAuthor } from 'src/app/courses/courses-list-item/courses-author-model';


export enum AuthorsActionTypes {
    SEARCH = '[Authors] Search',
    SEARCH_SUCCESS = '[Authors] Search Success'
}

export class Search implements Action {
    readonly type = AuthorsActionTypes.SEARCH;
    constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
    readonly type = AuthorsActionTypes.SEARCH_SUCCESS;
    constructor(public payload: CoursesAuthor[]) {}
}

export type All =
  | Search
  | SearchSuccess
  ;
