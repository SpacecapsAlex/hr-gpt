import axios from 'axios';
import { UpdateUserMainInformationType } from '../../types/types';

export const updateUserMainInformationQuery = async (
  userMainInformation: UpdateUserMainInformationType,
) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateUserMainInformation',
      {
        userId: userMainInformation.userId,
        information: userMainInformation.information,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
