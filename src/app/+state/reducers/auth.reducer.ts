import { User } from 'src/app/core/user-model';
import { All, AuthActionTypes } from '../actions/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}