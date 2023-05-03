import { FC, useState } from 'react';
import { Button, CheckBox, Input } from '../../..';
import { LanguagesType, UpdateUserLanguagesType } from '../../../../types/types';

type LanguagesInformationFormType = {
  userId: string
  languages:LanguagesType[],
  handleFinish: (data:UpdateUserLanguagesType) => void
};

export const LanguagesInformationForm:FC<LanguagesInformationFormType> = ({ languages, handleFinish, userId }) => {
  const [mainInfo, setMainInfo] = useState<LanguagesType[]>(
    languages,
  );
  const handleChange = (key: string, index: number, text: string | boolean) => {
    const changedArray: LanguagesType[] = Object.assign(
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
          value={item.level}
          placeholder="sdfsdf"
          handleChange={(e) => {
            handleChange('level', index, e);
          }}
        />
        <CheckBox
        value={item.isMain}
        checkBoxText={'Основной'}
        className=''
        handleChange={(value) => { handleChange('isPrimary', index, value); }}
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
              level: '',
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
    <Button text="Сохранить" onClick={() => handleFinish({ userId, languages: mainInfo })} />
  </form>
  );
};
