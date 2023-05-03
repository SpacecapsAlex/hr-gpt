/* eslint-disable max-lines */
import { FC, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Button, Input, SelectList } from '../../..';
import { educationTypesQuery } from '../../../../state/selector/educationTypes';
import { EducationUserType, UpdateUserEducationType } from '../../../../types/types';

type EducationInformationFormType = {
  userId: string;
  education: EducationUserType[],
  handleFinish: (data: UpdateUserEducationType) => void
};

export const EducationInformationForm:FC<EducationInformationFormType> = ({ education, handleFinish, userId }) => {
  const [mainInfo, setMainInfo] = useState<EducationUserType[]>(
    education,
  );
  const handleChange = (key: string, index: number, text: string | number) => {
    const changedArray: EducationUserType[] = Object.assign(
      [],
      mainInfo,
    );
    changedArray[index] = { ...changedArray[index], [key]: text };
    setMainInfo(changedArray);
  };
  const educationOptopns = useRecoilValue(educationTypesQuery);

  return (
        <form>
      {mainInfo.map((item, index) => (
        <div key={index} className = 'flex flex-col gap-3 border-2 mb-8 p-4 w-9/12'>
          <SelectList
          defaultValue={item.EducationTypeName}
          options={educationOptopns}
          handleChange={(value: string) => {
            handleChange('EducationTypeName', index, value);
          }}
          />
          <div>
            <div>
              Введите учебное заведение
            </div>
          <Input
          className='w-full'
            value={item.institution}
            placeholder="sdfsdf"
            handleChange={(e) => {
              handleChange('institution', index, e);
            }}
          />
          </div>
            <div>
            <div>
            Введите годы обучения
          </div>
          <div className='flex gap-5'>
            C
          <Input
          className='w-40'
          value={`${item.startYear}`}
          placeholder="sdfsdf"
          handleChange={(e) => {
            handleChange('startYear', index, +e);
          }}
                  />
                  По
          <Input
          className='w-40'
            value={`${item.finishYear}`}
            placeholder="sdfsdf"
            handleChange={(e) => {
              handleChange('finishYear', index, +e);
            }}
          />
  </div>
            </div>
            <div>
              <div>Специальность</div>
            <Input
          className='w-full'
            value={item.specialization}
            placeholder="sdfsdf"
            handleChange={(e) => {
              handleChange('specialization', index, e);
            }}
          />
            </div>
            <div>
            <Input
          className='w-full'
            value={item.mainInformation}
            rows={5}
            autoSize={false}
            placeholder="sdfsdf"
            handleChange={(e) => {
              handleChange('mainInformation', index, e);
            }}
          />
            </div>
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
                startYear: 0,
                finishYear: 0,
                institution: '',
                specialization: '',
                mainInformation: '',
                EducationTypeName: '',
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
      <Button text="Сохранить" onClick={() => handleFinish({ userId, educations: mainInfo })} />
    </form>
  );
};
