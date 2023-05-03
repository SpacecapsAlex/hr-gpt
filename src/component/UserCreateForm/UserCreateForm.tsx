/* eslint-disable max-lines */
import { FC, useState } from 'react';
import { CheckBoxComponent } from '../CheckBox/CheckBoxComponent';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import { InputComponent } from '../Input/Input';
import { SelectList } from '../SelectList/SelectList';
import { createNewUser } from '../../api/createUser';
import {
  contactsList,
  countryList,
  educationList,
  initialValues,
  languageLevelList,
  languagesList,
  profLevelList,
  positionList,
  // workLevelList,
} from './UserMockData';
import {
  ArrayKeys,
  CreateUserArrayTypeKeys,
  CreateUserType,
} from '../../types/types';

import styles from './styles.module.css';
import { convertDate } from '../../utils/utils';
import { Button } from '../Button/Button';

const doubleField = () => console.log('doubleField');

export const UserCreateForm: FC = () => {
  const [formValue, setFormValue] = useState<CreateUserType>(initialValues);

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
    setFormValue((prevState) => ({
      ...prevState,
      mainField: updatedArray,
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
        />
      </li>
      <li className={styles.formItem}>
        <SelectList
          options={countryList}
          value={formValue.citizenship || undefined}
          handleChange={(value) => handleChange('citizenship', value)}
          placeholder="Гражданство"
        />
      </li>
      <SelectList
        options={countryList}
        value={formValue.country || undefined}
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
        value={formValue.position || undefined}
        handleChange={(value) => handleChange('position', value)}
        placeholder="Позиция"
      />
      <SelectList
        options={profLevelList}
        value={formValue.professionalLevel || undefined}
        handleChange={(value) => handleChange('professionalLevel', value)}
        placeholder="Профессиональный уровень"
      />
      {/* <SelectList  //TODO SelectList accept only strings as value. need to think
        options={workLevelList}
        value={formValue.workLevelSkill as number}
        handleChange={(value) => handleChange('workLevelSkill', value)}
        placeholder="Опыт работы, лет"
      /> */}
      <div className="flex justify-between w-full">
        <SelectList
          options={educationList}
          value={formValue?.educations?.[0].educationTypeName || undefined}
          handleChange={(value) => handleChange('educationTypeName', value)}
          placeholder="Образование"
        />
        <InputComponent
          placeholder="Учебное заведение"
          handleChange={(value) => {
            updateArrayValues('institution', value, 'educations');
          }}
          value={formValue.educations?.[0].institution}
        />
        <InputComponent
          placeholder="Специальность"
          handleChange={(value) => {
            updateArrayValues('specialization', value, 'educations');
          }}
          value={formValue.educations?.[0].specialization}
        />
      </div>
      <div className="flex justify-between w-full items-center">
        <DatePickerComponent
          handleChange={(value) => {
            updateArrayValues('specialization', value, 'educations');
          }}
          label="Начало обучения "
          mode="year"
          value={formValue.educations?.[0].startYear.toString()}
        />
        <DatePickerComponent
          handleChange={(value) => {
            updateArrayValues('specialization', value, 'educations');
          }}
          label="Окончание обучения "
          mode="year"
          value={formValue.educations?.[0].finishYear.toString()}
        />
      </div>
      <InputComponent
        placeholder="Основная информация"
        handleChange={(value) => {
          updateArrayValues('mainInformation', value, 'educations');
        }}
        value={formValue.educations?.[0].mainInformation}
      />
      <div className="flex justify-between w-full items-center">
        <SelectList
          options={contactsList}
          value={formValue.contacts?.[0].name || undefined}
          handleChange={(value) => {
            updateArrayValues('name', value, 'contacts');
          }}
          placeholder="Контакты"
        />
        <InputComponent
          placeholder="Номер"
          handleChange={(value) => {
            updateArrayValues('value', value, 'contacts');
          }}
          value={formValue.contacts?.[0].value}
        />
        <CheckBoxComponent
          handleChange={(value) => {
            updateArrayValues('isPrimary', value, 'contacts');
          }}
          checkBoxText="Основной контакт"
        />
        <Button onClick={() => doubleField()} text="Добавить" />
      </div>
      <div className="flex justify-between w-full">
        <SelectList
          options={languagesList}
          value={formValue.languages?.[0].name || undefined}
          handleChange={(value) => {
            updateArrayValues('name', value, 'languages');
          }}
          placeholder="Языки"
        />
        <SelectList
          options={languageLevelList}
          value={formValue.languages?.[0].level || undefined}
          handleChange={(value) => {
            updateArrayValues('level', value, 'languages');
          }}
          placeholder="Уровень владения"
        />
        <CheckBoxComponent
          handleChange={(value) => handleChange('isPrimaryLanguage', value)}
          checkBoxText="Основной язык"
        />
        <Button onClick={() => doubleField()} text="Добавить" />
      </div>
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
