/* eslint-disable max-lines */
import { FC } from 'react';
import { SelectList } from '../../SelectList/SelectList';
import { educationList, deepCopyInitial } from '../UserMockData';
import {
  ArrayKeys,
  CreateUserArrayTypeKeys,
  EducationType,
  UserArrayTypes,
} from '../../../types/createUserTypes';
import { Button } from '../../Button/Button';
import { InputComponent } from '../../Input/Input';
import { cloneDeep } from '../../../utils/utils';
import { DatePickerComponent } from '../../DatePicker/DatePicker';

import styles from '../styles.module.css';

type Props = {
  updateArrayValues: (
    field: ArrayKeys,
    value: string | boolean,
    mainField: CreateUserArrayTypeKeys,
    index?: number,
  ) => void;
  addField: (
    mainField: CreateUserArrayTypeKeys,
    initialValue: UserArrayTypes,
  ) => void;
  education: EducationType[];
};

export const Education: FC<Props> = ({
  updateArrayValues,
  addField,
  education,
}) => (
  <>
    {education.map((item, index) => (
      <div
        key={(item.specialization + index).toString()}
        className={styles.wrapper}
      >
        <div className="flex justify-between w-full">
          <SelectList
            options={educationList}
            value={item.educationTypeName || undefined}
            handleChange={(value) => {
              updateArrayValues(
                'educationTypeName',
                value,
                'educations',
                index,
              );
            }}
            placeholder="Образование"
          />
          <InputComponent
            placeholder="Учебное заведение"
            handleChange={(value) => {
              updateArrayValues('institution', value, 'educations', index);
            }}
            value={item.institution}
          />
          <InputComponent
            placeholder="Специальность"
            handleChange={(value) => {
              updateArrayValues('specialization', value, 'educations', index);
            }}
            value={item.specialization}
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <DatePickerComponent
            handleChange={(value) => {
              updateArrayValues('startYear', value, 'educations', index);
            }}
            label="Начало обучения "
            mode="year"
            value={item.startYear.toString()}
          />
          <DatePickerComponent
            handleChange={(value) => {
              updateArrayValues('finishYear', value, 'educations', index);
            }}
            label="Окончание обучения "
            mode="year"
            value={item.finishYear.toString()}
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <InputComponent
            placeholder="Основная информация"
            handleChange={(value) => {
              updateArrayValues('mainInformation', value, 'educations', index);
            }}
            value={item.mainInformation}
          />
          <Button
            onClick={
              () =>
                addField('educations', cloneDeep(deepCopyInitial.educations[0])) // eslint-disable-line
            }
            text="Добавить образование"
          />
        </div>
      </div>
    ))}
  </>
);
