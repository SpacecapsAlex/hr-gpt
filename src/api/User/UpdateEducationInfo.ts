import axios from 'axios';
import { UpdateUserEducationType } from '../../types/types';

export const updateEducationInfoQuery = async (
  educationInfo: UpdateUserEducationType,
) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateEducations',
      {
        userId: educationInfo.userId,
        educations: educationInfo.educations,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
