import { IUser, UserActions } from './types';

const initialState = {
  isAuth: false,
  user: {} as IUser
};

type State = typeof initialState;

// eslint-disable-next-line default-param-last
const userReducer = (state: State = initialState, action: UserActions): State => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: { ...state, ...action.payload },
        isAuth: true
      };

    case 'REMOVE_USER':
      return {
        ...state,
        user: {} as IUser,
        isAuth: false
      };

    default:
      return state;
  }
};

export { userReducer };
