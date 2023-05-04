import { FC } from 'react';
import { CheckBoxComponent } from '../../CheckBox/CheckBoxComponent';
import { SelectList } from '../../SelectList/SelectList';
import { contactsList, deepCopyInitial } from '../UserMockData';
import {
  ArrayKeys,
  CreateUserArrayTypeKeys,
  ContactType,
  UserArrayTypes,
} from '../../../types/createUserTypes';
import { Button } from '../../Button/Button';
import { InputComponent } from '../../Input/Input';
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
  contacts: ContactType[];
};

export const Contacts: FC<Props> = ({
  updateArrayValues,
  addField,
  contacts,
}) => (
  <>
    {contacts.map(({ name, value }, index) => (
      <div
        key={(name + index).toString()}
        className="flex justify-between w-full items-center"
      >
        <SelectList
          options={contactsList}
          value={name || undefined}
          handleChange={(_value) => {
            updateArrayValues('name', _value, 'contacts', index);
          }}
          placeholder="Контакты"
        />
        <InputComponent
          placeholder="Номер"
          handleChange={(_value) => {
            updateArrayValues('value', _value, 'contacts', index);
          }}
          value={value}
        />
        <CheckBoxComponent
          handleChange={(_value) => {
            updateArrayValues('isMain', _value, 'contacts', index);
          }}
          checkBoxText="Основной контакт"
        />
        <Button
          onClick={
            () => addField('contacts', cloneDeep(deepCopyInitial.contacts[0])) // eslint-disable-line
          }
          text="Добавить"
        />
      </div>
    ))}
  </>
);
