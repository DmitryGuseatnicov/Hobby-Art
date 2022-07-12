import { Dispatch } from 'react';

import { userModel } from 'entities/user';
import * as fakeServer from 'shared/fakeServer';

type UpdateUserArgs = {
  password: string;
  name: string;
  middleName: string;
  lastName: string;
  mail: string;
  phone: string;
  dateOfBirth: string;
  address: string;
};

const updateUserData =
  (id: string, args: UpdateUserArgs) => async (dispatch: Dispatch<userModel.UserActions>) => {
    try {
      const res = await fakeServer.user.put<userModel.IUser>(id, args);
      const user = res.data;
      if (user.id) {
        dispatch(userModel.setUser(user));
      } else {
        dispatch(userModel.setUserError('что-то пошло не так попробуйте позже'));
      }
    } catch (error) {
      console.log(error);
    }
  };
export type { UpdateUserArgs };
export { updateUserData };
