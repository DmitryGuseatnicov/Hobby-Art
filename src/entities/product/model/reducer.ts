import { IUser, UserActions } from './types';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as IUser
};

type State = typeof initialState;

// eslint-disable-next-line default-param-last
const userReducer = (state: State = initialState, action: UserActions): State => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: { ...action.payload },
        isAuth: true
      };

    case 'REMOVE_USER':
      return {
        ...state,
        user: {} as IUser,
        isAuth: false
      };

    case 'SET_USER_LOADING': {
      return {
        ...state,
        isAuth: action.payload
      };
    }

    case 'SET_USER_ERROR': {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};

export { userReducer };
