/* eslint-disable no-console */
import { Dispatch } from 'react';
import { userModel } from 'entities/user';
import * as fakeServer from 'shared/fakeServer';

type LoginArgs = {
  phone: string;
  password: string;
};

type RegisterArgs = {
  name: string;
  middleName: string;
  lastName: string;
  mail: string;
  phone: string;
  password: string;
};

const login = (args: LoginArgs) => async (dispatch: Dispatch<userModel.UserActions>) => {
  try {
    const res = await fakeServer.user.get<userModel.IUser>(args);
    const [user] = res.data;

    if (user) {
      dispatch(userModel.setUser(user));
    } else {
      dispatch(userModel.setUserError('Неверный Логин или Пароль'));
    }
  } catch (error) {
    // FIX ME change this for normal catch error
    console.log(error);
  }
};

const register = (args: RegisterArgs) => async (dispatch: Dispatch<userModel.UserActions>) => {
  try {
    const res = await fakeServer.user.post(args);
    const user = res.data;

    if (user.id) {
      dispatch(userModel.setUser(user));
    } else {
      dispatch(userModel.setUserError('что-то пошло не так попробуйте позже'));
    }
  } catch (error) {
    // FIX ME change this for normal catch error
    console.log(error);
  }
};
export type { LoginArgs, RegisterArgs };
export { login, register };
