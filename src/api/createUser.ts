import axios from 'axios';
import { baseURL } from '../constants/path';
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
    const response = await axios.post(`${baseURL}User/CreateUser`, {
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
    });
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
