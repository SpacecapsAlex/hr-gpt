import axios from 'axios';
import { UpdateUserProfileInformationType } from '../../types/types';

export const updateUserProfileInformationQuery = async (
  userInfo: UpdateUserProfileInformationType,
) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateUserProfileInformation',
      {
        userId: userInfo.userId,
        firstName: userInfo.firstName,
        surName: userInfo.surName,
        lastName: userInfo.lastName,
        birthday: userInfo.birthday,
        citizenship: userInfo.citizenship,
        country: userInfo.country,
        city: userInfo.city,
        position: userInfo.position,
        workLevelSkills: userInfo.workSkillsString,
        professionalLevelName: userInfo.professionalLevelName,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
