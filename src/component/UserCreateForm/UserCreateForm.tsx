/* eslint-disable max-lines */
import { FC, useState } from 'react';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import { InputComponent } from '../Input/Input';
import { SelectList } from '../SelectList/SelectList';
import { createNewUser } from '../../api/createUser';
import {
  countryList,
  initialValues,
  profLevelList,
  positionList,
  workLevelList,
} from './UserMockData';
import {
  ArrayKeys,
  CreateUserArrayTypeKeys,
  CreateUserType,
  UserArrayTypes,
} from '../../types/createUserTypes';
import { Contacts } from './Contacts/Contacts';
import { Education } from './Education/Education';
import { Languages } from './Languages/Languages';

import styles from './styles.module.css';
import { convertDate, disabledFutureDate } from '../../utils/utils';
import { Button } from '../Button/Button';

export const UserCreateForm: FC = () => {
  const [formValue, setFormValue] = useState<CreateUserType>(initialValues);

  // console.log('formValue', formValue);

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
      <li className={styles.formItem}>
        <InputComponent
          placeholder="Имя"
          handleChange={(value) => handleChange('firstName', value)}
          value={formValue.firstName as string}
        />
      </li>
      <li className={styles.formItem}>
        <InputComponent
          placeholder="Фамилия"
          handleChange={(value) => handleChange('surName', value)}
          value={formValue.surName as string}
        />
      </li>
      <li className={styles.formItem}>
        <InputComponent
          placeholder="Отчество"
          handleChange={(value) => handleChange('lastName', value)}
          value={formValue.lastName as string}
        />
      </li>
      <li style={{ flexBasis: '100%' }}>
        <DatePickerComponent
          handleChange={(value) => {
            handleChange('birthday', convertDate(value));
          }}
          label="Дата рождения "
          value={formValue.birthday as string}
          disabledDate={disabledFutureDate}
        />
      </li>
      <li className={styles.formItem}>
        <SelectList
          options={countryList}
          value={formValue.citizenship}
          handleChange={(value) => handleChange('citizenship', value)}
          placeholder="Гражданство"
        />
      </li>
      <SelectList
        options={countryList}
        value={formValue.country}
        handleChange={(value) => handleChange('country', value)}
        placeholder="Страна проживания"
      />
      <InputComponent
        placeholder="Город проживания"
        handleChange={(value) => handleChange('city', value)}
        value={formValue.city as string}
      />
      <SelectList
        options={positionList}
        value={formValue.position}
        handleChange={(value) => handleChange('position', value)}
        placeholder="Позиция"
      />
      <SelectList
        options={profLevelList}
        value={formValue.professionalLevel}
        handleChange={(value) => handleChange('professionalLevel', value)}
        placeholder="Профессиональный уровень"
      />
      <SelectList
        options={workLevelList}
        value={formValue.workLevelSkill?.toString()}
        handleChange={(value) => handleChange('workLevelSkill', value)}
        placeholder="Опыт работы, лет"
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
