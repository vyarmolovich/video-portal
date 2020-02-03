import { CoursesListItem } from 'src/app/courses/courses-list-item/courses-list-item-model'
import { All, CoursesActionTypes } from '../actions/courses.actions';

export const PAGE_SIZE = 4;

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    courses: CoursesListItem[];
    filter: string | null;
    selected: CoursesListItem | null;
    pageSize: number;
}

export const initialState: CoursesState = {
    courses: [],
    filter: null,
    selected: null,
    pageSize: PAGE_SIZE
};

export const getCourses = (state: CoursesState) => state.courses;
export const getFilter = (state: CoursesState) => state.filter;
export const getSelected = (state: CoursesState) => state.selected;
export const getPageSize = (state: CoursesState) => state.pageSize;

export function reducer(state = initialState, action: All): CoursesState {

    switch (action.type) {
      case CoursesActionTypes.GETLIST_SUCCESS: {
        return {
          ...state,
          courses: action.payload,
          pageSize: action.payload.length
        };
      }
      case CoursesActionTypes.GETONE_SUCCESS: {
        return {
          ...state,
          selected: action.payload
        };
      }
      case CoursesActionTypes.UPDATE_SUCCESS: {
        return {
          ...state,
          selected: action.payload
        };
      }
      case CoursesActionTypes.CREATE_SUCCESS: {
        return {
          ...state,
          selected: action.payload
        };
      }
      case CoursesActionTypes.DELETE_SUCCESS: {
        return state;
      }
      case CoursesActionTypes.SEARCH_SUCCESS: {
        return {
          ...state,
          courses: action.payload,
          pageSize: action.payload.length
        };
      }
      default: {
        return state;
      }
    }
  }