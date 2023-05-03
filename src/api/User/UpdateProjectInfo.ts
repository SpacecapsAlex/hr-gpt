import axios from 'axios';
import { UpdateUserProjectType } from '../../types/types';

export const updateProjectInfoQuery = async (
  projectInfo: UpdateUserProjectType,
) => {
  try {
    const response = await axios.put(
      'http://spacecapsalex-002-site1.atempurl.com/User/UpdateProjects',
      {
        userId: projectInfo.userId,
        projects: projectInfo.project,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
