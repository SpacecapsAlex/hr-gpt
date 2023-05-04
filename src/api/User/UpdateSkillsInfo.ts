import axios from 'axios';
import { UpdateUserSkillsType } from '../../types/types';

export const updateSkillsInfoQuery = async (
  { userId, skills }: UpdateUserSkillsType,
) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateSkills',
      {
        userId,
        skills,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
