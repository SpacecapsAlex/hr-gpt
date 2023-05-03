import axios from 'axios';
import { LoginFormType } from '../types/types';

export const LoginQuerry = async (loginData: LoginFormType) => {
  const response = await axios.get(
    'http://spacecapsalex-002-site1.atempurl.com/Auth/Auth',
    {
      params: {
        login: loginData.login,
        password: loginData.password,
      },
    },
  );
  return response;
};
