import axios from 'axios';
import { LoginFormType } from '../types/types';

export const LoginQuerry = async ({ login, password }: LoginFormType) => {
  const response = await axios.get<{ login:string, token:string }>(
    'http://spacecapsalex-002-site1.atempurl.com/Auth/Auth',
    {
      params: { login, password },
    },
  );
  return response.data;
};
