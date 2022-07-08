import { IRemoveUser, ISetUser, IUser } from './types';

const setUser = (user: IUser): ISetUser => ({ type: 'SET_USER', payload: user });

const removeUser = (): IRemoveUser => ({ type: 'REMOVE_USER' });

export { setUser, removeUser };
