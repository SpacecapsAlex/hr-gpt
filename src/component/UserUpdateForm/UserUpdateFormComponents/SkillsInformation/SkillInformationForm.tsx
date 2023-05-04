import { FC, useEffect, useState } from 'react';
import { Button, Input, Tags } from '../../..';
import { UpdateUserSkillsType } from '../../../../types/types';

type SkillInformationFormType = {
  userId: string;
  skills: string[];
  handleFinish: (data: UpdateUserSkillsType) => void;
};

export const SkillInformationForm: FC<SkillInformationFormType> = ({
  skills,
  userId,
  handleFinish,
}) => {
  const [mainInfo, setMainInfo] = useState<string[]>(skills);
  useEffect(() => {
    skills.forEach((item) => setMainInfo([...mainInfo, item]));
  }, []);
  const [inputValue, setInputValue] = useState<string>('');
  const handleTagAdd = (name: string) => {
    setMainInfo([...mainInfo, name]);
    setInputValue('');
  };
  return (
    <form>
      <Tags
        tagsValue={mainInfo}
        isClosable={true}
        handleClose={(tag, e) => {
          e.preventDefault();
          setMainInfo(mainInfo.filter((item) => item !== tag));
        }}
      />
      <div className="flex gap-3 mt-8">
        <Input
          placeholder="Введите навык"
          value={inputValue}
          handleChange={(e) => setInputValue(e)}
          className="w-40"
        />
        <Button text="Добавить" onClick={() => handleTagAdd(inputValue)} />
      </div>
      <Button
        text="Сохранить"
        onClick={() => handleFinish({ userId, skills: mainInfo })}
        className="mt-8"
      />
    </form>
  );
};
