import axios from 'axios';
import { UpdateUserContactsType } from '../../types/types';

export const updateContactInfoQuery = async (
  { userId, contacts }: UpdateUserContactsType,
) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateContacts',
      {
        userId,
        contacts,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
