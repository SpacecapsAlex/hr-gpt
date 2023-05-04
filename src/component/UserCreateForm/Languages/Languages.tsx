import { FC } from 'react';
import { CheckBoxComponent } from '../../CheckBox/CheckBoxComponent';
import { SelectList } from '../../SelectList/SelectList';
import {
  languagesList,
  deepCopyInitial,
  languageLevelList,
} from '../UserMockData';
import {
  ArrayKeys,
  CreateUserArrayTypeKeys,
  LanguageType,
  UserArrayTypes,
} from '../../../types/createUserTypes';
import { Button } from '../../Button/Button';
import { cloneDeep } from '../../../utils/utils';

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
  languages: LanguageType[];
};

export const Languages: FC<Props> = ({
  updateArrayValues,
  addField,
  languages,
}) => (
  <>
    {languages.map(({ name, level }, index) => (
      <div
        key={(name + index).toString()}
        className="flex justify-between w-full items-center"
      >
        <SelectList
          options={languagesList}
          value={name || undefined}
          handleChange={(value) => {
            updateArrayValues('name', value, 'languages', index);
          }}
          placeholder="Языки"
        />
        <SelectList
          options={languageLevelList}
          value={level || undefined}
          handleChange={(value) => {
            updateArrayValues('level', value, 'languages', index);
          }}
          placeholder="Уровень владения"
        />
        <CheckBoxComponent
          handleChange={(value) => {
            updateArrayValues('isMain', value, 'languages', index);
          }}
          checkBoxText="Основной язык"
        />
        <Button
          onClick={
            () => addField('languages', cloneDeep(deepCopyInitial.languages[0])) // eslint-disable-line
          }
          text="Добавить"
        />
      </div>
    ))}
  </>
);
