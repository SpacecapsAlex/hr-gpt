import { FC, useState } from 'react';
import { Button, Input } from '../../..';
import { AdditionalInformationType, UpdateUserMainInformationType } from '../../../../types/types';

type MainInformationFormType = {
  userId:string
  additionalInformation: AdditionalInformationType[];
  handleFinish: (mainInfo: UpdateUserMainInformationType) => void;
};

export const MainInformationForm: FC<MainInformationFormType> = ({
  additionalInformation,
  userId,
  handleFinish,
}) => {
  const [mainInfo, setMainInfo] = useState<AdditionalInformationType[]>(
    additionalInformation,
  );
  const handleChange = (key: string, index: number, text: string) => {
    const changedArray: AdditionalInformationType[] = Object.assign(
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
            value={item.title}
            placeholder="sdfsdf"
            handleChange={(e) => {
              handleChange('title', index, e);
            }}
          />
          <Input
          className='w-full'
            autoSize={false}
            rows={5}
            value={item.description}
            placeholder="sdfsdf"
            handleChange={(e) => {
              handleChange('description', index, e);
            }}
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
                title: '',
                description: '',
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
      <Button text="Сохранить" onClick={() => handleFinish({ userId, information: mainInfo })} />
    </form>
  );
};
