import { createFeatureSelector, createSelector } from '@ngrx/store';


import * as auth from './reducers/auth.reducer';
import * as courses from './reducers/courses.reducer';

export interface State {
  authState: auth.AuthState;
  coursesState: courses.CoursesState;
}

export const reducers = {
  auth: auth.reducer,
  courses: courses.reducer
};

export const selectAuthState = createFeatureSelector<auth.AuthState>('auth');
export const selectCoursesState = createFeatureSelector<courses.CoursesState>('courses');

export const getCourses = createSelector(selectCoursesState, courses.getCourses);
export const getFilter = createSelector(selectCoursesState, courses.getFilter);
export const getSelected = createSelector(selectCoursesState, courses.getSelected);
export const getPageSize = createSelector(selectCoursesState, courses.getPageSize);
