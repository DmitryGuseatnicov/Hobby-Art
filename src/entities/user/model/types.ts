interface IUser {
  id: string;
  name: string;
  middleName: string;
  lastName: string;
  avatar: string;
  mail: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  bonus: number;
}

interface IUserState {
  isAuth: boolean;
  isLoading: boolean;
  error: string;
  user: IUser;
}

interface ISetUser {
  type: 'SET_USER';
  payload: IUser;
}

interface IRemoveUser {
  type: 'REMOVE_USER';
}

interface ISetUserLoading {
  type: 'SET_USER_LOADING';
  payload: boolean;
}

interface ISetUserError {
  type: 'SET_USER_ERROR';
  payload: string;
}

type UserActions = ISetUser | IRemoveUser | ISetUserLoading | ISetUserError;

export type {
  IUser,
  IRemoveUser,
  ISetUser,
  UserActions,
  IUserState,
  ISetUserLoading,
  ISetUserError
};
