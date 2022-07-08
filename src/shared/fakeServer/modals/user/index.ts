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

storageWorker.clear();

class User {
  constructor() {
    if (storageWorker.get('user').length === 0) {
      this.init();
    }
  }

  public getAll<T>() {
    const users = storageWorker.get<T>('user');
    return { data: users };
  }

  public getByParams<T>(params: Partial<IUser>) {
    const users = storageWorker.get<IUser>('user');
    const matchUsers = paramsFilterMatcher(users, params);
    return { data: matchUsers as unknown as T[] };
  }

  public create(user: INewUser) {
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

    return { data: newUser };
  }

  public update(id: string, data: Partial<IUser>) {
    const [user] = storageWorker.get<IUser>('user').filter((us) => us.id === id);
    const userUpdated = { ...user, ...data };
    const users = storageWorker
      .get<IUser>('user')
      .map((us) => (us.id === userUpdated.id ? userUpdated : us));
    storageWorker.set('user', users);
    return { data: userUpdated };
  }

  private init() {
    storageWorker.set('user', userJson.user);
  }
}

export type { IUser, INewUser };
export { User as UserService };
