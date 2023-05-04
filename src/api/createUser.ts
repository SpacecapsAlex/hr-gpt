import axios from 'axios';
import { CreateUserType } from '../types/createUserTypes';

export const createNewUser = async (userData: CreateUserType) => {
  const {
    firstName,
    surName,
    lastName,
    birthday,
    citizenship,
    country,
    city,
    position,
    professionalLevel,
    workLevelSkill,
    additional,
    educations,
    contacts,
    languages,
    skills,
    projects,
  } = userData;
  try {
    const response = await axios.post(
      'http://spacecapsalex-002-site1.atempurl.com/User/CreateUser',
      {
        firstName,
        surName,
        lastName,
        birthday,
        citizenship,
        country,
        city,
        position,
        professionalLevel,
        workLevelSkill,
        additional,
        educations,
        contacts,
        languages,
        skills,
        projects,
      },
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
