import { Action } from '@ngrx/store';
import { CoursesListItem } from 'src/app/courses/courses-list-item/courses-list-item-model';


export enum CoursesActionTypes {
    GETLIST = '[Courses] Get List',
    GETLIST_SUCCESS = '[Courses] Get List Success',
    GETONE = '[Courses] Get One',
    GETONE_SUCCESS = '[Courses] Get One Success',
    UPDATE = '[Courses] Edit',
    UPDATE_SUCCESS = '[Courses] Edit Success',
    CREATE = '[Courses] Create New',
    CREATE_SUCCESS = '[Courses] Create New Success',
    DELETE = '[Courses] Remove',
    DELETE_SUCCESS = '[Courses] Remove Success',
    SEARCH = '[Courses] Search',
    SEARCH_SUCCESS = '[Courses] Search Success'
}

export class GetList implements Action {
    readonly type = CoursesActionTypes.GETLIST;
    constructor(public payload: any) {}
}

export class GetListSuccess implements Action {
    readonly type = CoursesActionTypes.GETLIST_SUCCESS;
    constructor(public payload: CoursesListItem[]) {}
}

export class GetOne implements Action {
     readonly type = CoursesActionTypes.GETONE;
    constructor(public payload: number) {}
}

export class GetOneSuccess implements Action {
    readonly type = CoursesActionTypes.GETONE_SUCCESS;
   constructor(public payload: CoursesListItem) {}
}

export class Update implements Action {
    readonly type = CoursesActionTypes.UPDATE;
    constructor(public payload: CoursesListItem) {}
}

export class UpdateSuccess implements Action {
    readonly type = CoursesActionTypes.UPDATE_SUCCESS;
    constructor(public payload: CoursesListItem) {}
}

export class Create implements Action {
    readonly type = CoursesActionTypes.CREATE;
    constructor(public payload: CoursesListItem) {}
}

export class CreateSuccess implements Action {
    readonly type = CoursesActionTypes.CREATE_SUCCESS;
    constructor(public payload: CoursesListItem) {}
}

export class Delete implements Action {
    readonly type = CoursesActionTypes.DELETE;
    constructor(public payload: CoursesListItem) {}
}

export class DeleteSuccess implements Action {
    readonly type = CoursesActionTypes.DELETE_SUCCESS;
    constructor(public payload: any) {}
}

export class Search implements Action {
    readonly type = CoursesActionTypes.SEARCH;
    constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
    readonly type = CoursesActionTypes.SEARCH_SUCCESS;
    constructor(public payload: CoursesListItem[]) {}
}

export type All =
  | GetList
  | GetListSuccess
  | GetOne
  | GetOneSuccess
  | Update
  | UpdateSuccess
  | Create
  | CreateSuccess
  | Delete
  | DeleteSuccess
  | Search
  | SearchSuccess
  ;
