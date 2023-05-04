import axios from 'axios';
import { UpdateUserLanguagesType } from '../../types/types';

export const updateLanguagesInfoQuery = async ({
  userId,
  languages,
}: UpdateUserLanguagesType) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateLanguages',
      {
        userId,
        languages,
      },
    );
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
