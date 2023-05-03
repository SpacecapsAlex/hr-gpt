import { FC, useState } from 'react';
import { Button, CheckBox, Input } from '../../..';
import { ContactType, UpdateUserContactsType } from '../../../../types/types';

type ContactsInformationFormType = {
  userId: string,
  contacts:ContactType[];
  handleFinish: (data:UpdateUserContactsType) => void
};

export const ContactsInformationForm:FC<ContactsInformationFormType> = ({ contacts, handleFinish, userId }) => {
  const [mainInfo, setMainInfo] = useState<ContactType[]>(
    contacts,
  );
  const handleChange = (key: string, index: number, text: string | boolean) => {
    const changedArray: ContactType[] = Object.assign(
      [],
      mainInfo,
    );
    changedArray[index] = { ...changedArray[index], [key]: text };
    setMainInfo(changedArray);
  };
  return (
    <form>
    {mainInfo.map((item, index) => (
      <div key={index} className = 'flex flex-col gap-3 border-2 mb-8 p-4 w-9/12'>
        <Input
        className='w-full'
          value={item.name}
          placeholder="sdfsdf"
          handleChange={(e) => {
            handleChange('name', index, e);
          }}
        />
        <Input
        className='w-full'
          value={item.value}
          placeholder="sdfsdf"
          handleChange={(e) => {
            handleChange('value', index, e);
          }}
        />
        <CheckBox
        value={item.isMain}
        checkBoxText={'Приорететный вид связи'}
        className=''
        handleChange={(value) => { handleChange('isMain', index, value); }}
        />
      </div>
    ))}
    <div className='gap-3 mb-3'>
      <Button
        text={'Добавить описание'}
        className='border-0'
        onClick={() => {
          setMainInfo([
            ...mainInfo,
            {
              name: '',
              value: '',
              isMain: false,
            },
          ]);
        }}
      />
      <Button
       className='border-0'
        text={'Удалить описание'}
        onClick={() => {
          setMainInfo(
            mainInfo.filter((item, index) => index !== mainInfo.length - 1),
          );
        }}
      />
    </div>
    <Button text="Сохранить" onClick={() => handleFinish({ userId, contacts: mainInfo })} />
  </form>
  );
};
