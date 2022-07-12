/* eslint-disable class-methods-use-this */
import { v4 as uuid } from 'uuid';
import * as fakeServer from 'shared/fakeServer/api';
import userJson from 'shared/fakeServer/initJson/user.json';
import { storageWorker, paramsFilterMatcher } from 'shared/fakeServer/libs';

interface IUser {
  id: string;
  password: string;
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

interface INewUser {
  password: string;
  name: string;
  middleName: string;
  lastName: string;
  mail: string;
  phone: string;
}

class User {
  constructor() {
    if (storageWorker.get('user').length === 0) {
      this.init();
    }
  }

  public getAll<T extends Partial<IUser>>() {
    const users = storageWorker.get<IUser>('user');
    return { data: users as T[] };
  }

  public getByParams<T extends Partial<IUser>>(params: Partial<IUser>) {
    const users = storageWorker.get<IUser>('user');
    const matchUsers = paramsFilterMatcher(users, params).map((user) => {
      const { password, ...responseUser } = user;
      return responseUser;
    });

    return { data: matchUsers as T[] };
  }

  public create<T extends Partial<IUser>>(user: INewUser) {
    const newUser: IUser = {
      ...user,
      id: uuid(),
      avatar: '',
      dateOfBirth: '',
      address: '',
      bonus: 0
    };

    const users = storageWorker.get<IUser>('user');
    users.push(newUser);
    storageWorker.set('user', users);
    fakeServer.cart.post(newUser.id);

    const { password, ...responseUser } = newUser;
    return { data: responseUser as T };
  }

  public update<T extends Partial<IUser>>(id: string, data: Partial<IUser>) {
    const [user] = storageWorker.get<IUser>('user').filter((us) => us.id === id);
    const userUpdated = { ...user, ...data };
    const users = storageWorker
      .get<IUser>('user')
      .map((us) => (us.id === userUpdated.id ? userUpdated : us));
    storageWorker.set('user', users);
    const { password, ...userResponse } = userUpdated;

    return { data: userResponse as T };
  }

  private init() {
    storageWorker.set('user', userJson.user);
  }
}

export type { IUser, INewUser };
export { User as UserService };
