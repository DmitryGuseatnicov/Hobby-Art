import { userModel } from 'entities/user';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userModel.setUser({ id: '' } as userModel.IUser));
  });
  return <div>Home</div>;
};

export { Home };
