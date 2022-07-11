import { userModel } from 'entities/user';
import * as fakeServer from 'shared/fakeServer';
import { AsyncDispatch } from 'entities/store';

type LoginArgs = {
  phone: string;
  password: string;
};

const login = (args: LoginArgs) => async (dispatch: AsyncDispatch) => {
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
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export { login };
