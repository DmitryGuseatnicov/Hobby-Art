import { useTypedSelector } from 'entities/hooks';

const useUser = () => useTypedSelector((state) => state.userReducer.user);
const useAuth = () => useTypedSelector((state) => state.userReducer.isAuth);

export { useUser, useAuth };
