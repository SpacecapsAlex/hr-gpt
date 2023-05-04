/* eslint-disable max-lines */
import { FC, useState } from 'react';
import { InputComponent } from '../Input/Input';
import { createNewUser } from '../../api/createUser';
import { initialValues } from './UserMockData';
import {
  ArrayKeys,
  CreateUserArrayTypeKeys,
  CreateUserType,
  UserArrayTypes,
} from '../../types/createUserTypes';
import { Contacts } from './Contacts/Contacts';
import { Education } from './Education/Education';
import { Languages } from './Languages/Languages';
import { Location } from './Location/Location';
import { Personal } from './Personal/Personal';
import { Professional } from './Professional/Professional';
import { Button } from '../Button/Button';

import styles from './styles.module.css';

export const UserCreateForm: FC = () => {
  const [formValue, setFormValue] = useState<CreateUserType>(initialValues);

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
  } = formValue;

  const handleChange = (name: string, value: string | boolean | number) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const updateArrayValues = (
    field: ArrayKeys,
    value: string | boolean,
    mainField: CreateUserArrayTypeKeys,
    index?: number,
  ) => {
    const fieldIndex = index || 0;
    const updatedArray = Array.isArray(formValue[mainField])
      ? [...formValue[mainField]]
      : [];
    const contactToUpdate = updatedArray[fieldIndex] as any;
    contactToUpdate[field] = value;
    setFormValue({
      ...formValue,
      [mainField]: updatedArray,
    });
  };

  const addField = (
    mainField: CreateUserArrayTypeKeys,
    initialValue: UserArrayTypes,
  ) => {
    const selectedArray = Array.isArray(formValue[mainField])
      ? [...formValue[mainField]]
      : [];
    selectedArray.push(initialValue);
    setFormValue((prevState) => ({
      ...prevState,
      [mainField]: selectedArray,
    }));
  };

  return (
    <ul className={styles.wrapper}>
      <Personal
        handleChange={handleChange}
        firstName={firstName}
        surName={surName}
        lastName={lastName}
        birthday={birthday}
      />
      <Location
        handleChange={handleChange}
        citizenship={citizenship}
        country={country}
        city={city}
      />
      <Professional
        handleChange={handleChange}
        position={position}
        professionalLevel={professionalLevel}
        workLevelSkill={workLevelSkill}
      />
      <Education
        updateArrayValues={updateArrayValues}
        addField={addField}
        education={formValue.educations}
      />
      <Contacts
        updateArrayValues={updateArrayValues}
        addField={addField}
        contacts={formValue.contacts}
      />
      <Languages
        updateArrayValues={updateArrayValues}
        addField={addField}
        languages={formValue.languages}
      />
      <li style={{ flexBasis: '100%' }}>
        <InputComponent
          placeholder="Навыки"
          handleChange={(value) => {
            updateArrayValues('name', value, 'skills');
          }}
          value={formValue.skills?.[0].name}
        />
      </li>
      {/* <InputComponent //TODO specific structure. need to think
        placeholder="Дополнительная информация"
        handleChange={(value) => handleChange('additionalTitle', value)}
        value={formValue.additionalTitle as string}
      /> */}
      <div className={styles.button}>
        <Button
          onClick={() => createNewUser(formValue)}
          text="Создать пользователя"
        />
      </div>
    </ul>
  );
};
