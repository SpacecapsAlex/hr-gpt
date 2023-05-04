/* eslint-disable max-lines */
import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Form, Label } from '..';
import {
  updateContactInfoQuery,
  updateEducationInfoQuery,
  updateLanguagesInfoQuery,
  updateProjectInfoQuery,
  updateSkillsInfoQuery,
  updateUserMainInformationQuery,
  updateUserProfileInformationQuery,
} from '../../api';
import { alertState } from '../../state/atom/alertState';
import { userDataQuery } from '../../state/selector/getUserData';
import { professionalLevelsQuery } from '../../state/selector/professionalLevels';
import { FormItemType, RadioOption } from '../../types/types';
import { handleAlert } from '../../utils/handleAlert';
import {
  ContactsInformationForm,
  EducationInformationForm,
  LanguagesInformationForm,
  MainInformationForm,
  ProjectsInformationForm,
  SkillInformationForm,
} from './UserUpdateFormComponents';
import { getUserProfileInformation } from './UserUpdateProfileName';

type UserUpdateFormType = {
  userId: string;
};
export const UserUpdateForm: FC<UserUpdateFormType> = ({ userId }) => {
  const userData = useRecoilValue(userDataQuery(userId));
  const [alert, setAlert] = useRecoilState(alertState);
  const professionLevelOption:RadioOption[] = useRecoilValue(professionalLevelsQuery);
  const profileInformation: FormItemType[] = getUserProfileInformation(userData, professionLevelOption);
  return (
    <div className='flex flex-col gap-5'>
      <Label text='Общая информация:' type='title' />
      <Form
      buttonText='Сохранить'
      classNameWrapper='m-4'
        formItems={profileInformation}
        handleFinish={(values) => {
          updateUserProfileInformationQuery({
            userId,
            firstName: values.firstName,
            surName: values.surName,
            lastName: values.lastName,
            birthday: values.birthday,
            citizenship: values.citizenship,
            country: values.country,
            city: values.city,
            position: values.position,
            workSkillsString: values.workLevelSkills,
            professionalLevelName: values.professionalLevelName,
          }).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
       <Label text='Дополнительная информация:' type='title' />
      <MainInformationForm
        userId={userId}
        additionalInformation={userData.additionalInfo}
        handleFinish={(data) => {
          updateUserMainInformationQuery(data).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
      <Label text='Контакты:' type='title' />
      <ContactsInformationForm
        userId={userId}
        contacts={userData.contactInfo}
        handleFinish={(data) => {
          updateContactInfoQuery(data).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
      <Label text='Языки:' type='title' />
      <LanguagesInformationForm
        userId={userId}
        languages={userData.languageInfo}
        handleFinish={(data) => {
          updateLanguagesInfoQuery(data).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
      <Label text='Навыки:' type='title' />
      <SkillInformationForm
        skills={userData.skillInfo}
        userId={userId}
        handleFinish={(data) => {
          updateSkillsInfoQuery(data).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
      <Label text='Образование:' type='title' />
      <EducationInformationForm
        userId={userId}
        education={userData.educationInfo}
        handleFinish={(data) => {
          updateEducationInfoQuery(data).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
       <Label text='Проекты:' type='title' />
      <ProjectsInformationForm
        projects={userData.projectInfo}
        userId={userId}
        handleFinish={(data) => {
          updateProjectInfoQuery(data).then((response) => handleAlert(response, alert, setAlert));
        }}
      />
    </div>
  );
};
