import axios from 'axios';
import { selectorFamily } from 'recoil';
import { GetUserType } from '../../types/types';

export const userDataQuery = selectorFamily<GetUserType, string>({
  key: 'userDataQuery',
  get: (userId: string) => async () => {
    const response = await axios.get<GetUserType>('http://spacecapsalex-002-site1.atempurl.com/User/GetUserById', {
      params: {
        userId,
      },
    });
    return response.data;
  },
});
