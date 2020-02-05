
import { CoursesAuthor } from 'src/app/courses/courses-list-item/courses-author-model';
import { AuthorsActionTypes, All } from '../actions/authors.actions';

export const authorsFeatureKey = 'authors';

export interface AuthorsState {
  authors: CoursesAuthor[];
}

export const initialState: AuthorsState = {
  authors: []
};

export function reducer(state = initialState, action: All): AuthorsState {

    switch (action.type) {
      case AuthorsActionTypes.SEARCH_SUCCESS: {
        return {
          ...state,
          authors: action.payload
        };
      }
      default: {
        return state;
      }
    }
  }