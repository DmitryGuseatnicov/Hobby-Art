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

interface ISetUser {
  type: 'SET_USER';
  payload: IUser;
}

interface IRemoveUser {
  type: 'REMOVE_USER';
}

type UserActions = ISetUser | IRemoveUser;

export type { IUser, IRemoveUser, ISetUser, UserActions };
