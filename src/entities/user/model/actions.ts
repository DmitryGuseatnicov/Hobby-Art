import { IRemoveUser, ISetUser, ISetUserError, ISetUserLoading, IUser } from './types';

const setUser = (user: IUser): ISetUser => ({ type: 'SET_USER', payload: user });

const removeUser = (): IRemoveUser => ({ type: 'REMOVE_USER' });

const setUserLoading = (isLoading: boolean): ISetUserLoading => ({
  type: 'SET_USER_LOADING',
  payload: isLoading
});

const setUserError = (error: string): ISetUserError => ({
  type: 'SET_USER_ERROR',
  payload: error
});

export { setUser, removeUser, setUserLoading, setUserError };
