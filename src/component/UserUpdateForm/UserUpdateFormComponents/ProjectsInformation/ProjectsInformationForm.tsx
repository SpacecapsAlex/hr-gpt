/* eslint-disable max-lines */
import { FC, useState } from 'react';
import {
  Button, DatePicker, Input, Tags,
} from '../../..';
import { ProjectType, UpdateUserProjectType } from '../../../../types/types';

type ProjectsInformationFormType = {
  userId:string
  projects: ProjectType[];
  handleFinish: (projects: UpdateUserProjectType) => void;
};

export const ProjectsInformationForm: FC<ProjectsInformationFormType> = ({
  projects,
  userId,
  handleFinish,
}) => {
  const [responsebilitiesInputValue, setResponsebilitiesInputValue] = useState<string>('');
  const [mainInfo, setMainInfo] = useState<ProjectType[]>(projects);
  const [skillsInputValue, setSkillsInputValue] = useState<string>('');
  const handleChange = (key: string, index: number, text: string) => {
    const changedArray: ProjectType[] = Object.assign([], mainInfo);
    changedArray[index] = { ...changedArray[index], [key]: text };
    setMainInfo(changedArray);
  };

  const handleDeleteResponibilities = (
    projectIndex: number,
    responsIndex: number,
  ) => {
    const changedArray: ProjectType[] = Object.assign([], mainInfo);
    changedArray[projectIndex] = {
      ...changedArray[projectIndex],
      responsibilities: changedArray[projectIndex].responsibilities.filter(
        (item, index) => index !== responsIndex,
      ),
    };
    setMainInfo(changedArray);
  };
  const handleAddResponibilities = (projectIndex: number, value: string) => {
    const changedArray: ProjectType[] = Object.assign([], mainInfo);
    changedArray[projectIndex] = {
      ...changedArray[projectIndex],
      responsibilities: [...changedArray[projectIndex].responsibilities, value],
    };
    setMainInfo(changedArray);
    setResponsebilitiesInputValue('');
  };
  const handleTagAdd = (projectIndex:number, value: string) => {
    const changedArray: ProjectType[] = Object.assign([], mainInfo);
    changedArray[projectIndex] = {
      ...changedArray[projectIndex],
      skills: [...changedArray[projectIndex].skills, value],
    };
    setMainInfo(changedArray);
    setResponsebilitiesInputValue('');
  };
  const handleDaleteTag = (projectIndex:number, tag: string) => {
    const changedArray: ProjectType[] = Object.assign([], mainInfo);
    changedArray[projectIndex] = {
      ...changedArray[projectIndex],
      skills: changedArray[projectIndex].skills.filter(
        (item) => item !== tag,
      ),
    };
    setMainInfo(changedArray);
  };
  return (
    <form>
      {mainInfo.map((item, index) => (
        <div className='flex flex-col gap-3 border-2 mb-8 p-4 w-9/12'>
          <div>
            <div>Название проекта</div>
            <Input
              className="w-full"
              value={item.name}
              placeholder="sdfsdf"
              handleChange={(e) => {
                handleChange('name', index, e);
              }}
            />
          </div>
          <div>
            <div>Длительность проекта</div>
            <div>
              <DatePicker
                defaultDate={item.startDate}
                handleChange={(e) => {
                  handleChange('startDate', index, e);
                }}
              />
              <DatePicker
                defaultDate={item.endDate}
                handleChange={(e) => {
                  handleChange('endDate', index, e);
                }}
              />
            </div>
          </div>
          <div>
            <div>
                Время на проекте
            </div>
            <Input
              className="w-full"
              value={item.time}
              placeholder="sdfsdf"
              handleChange={(e) => {
                handleChange('time', index, e);
              }}
            />
          </div>
          <div>
            <div>Позиция:</div>
            <Input
              className="w-full"
              value={item.position}
              placeholder="sdfsdf"
              handleChange={(e) => {
                handleChange('position', index, e);
              }}
            />
          </div>
          <div>
            <div>Описание проекта</div>
            <Input
              className="w-full"
              autoSize={false}
              rows={5}
              value={item.description}
              placeholder="sdfsdf"
              handleChange={(e) => {
                handleChange('description', index, e);
              }}
            />
          </div>
          <div>
            <div>Дополнительная информация</div>
            <Input
              className="w-full"
              autoSize={false}
              rows={5}
              value={item.someInformation}
              placeholder="sdfsdf"
              handleChange={(e) => {
                handleChange('someInformation', index, e);
              }}
            />
          </div>
          <div>
            <div>Общая информация</div>
            <Input
              className="w-full"
              autoSize={false}
              rows={5}
              value={item.mainInformation}
              placeholder="sdfsdf"
              handleChange={(e) => {
                handleChange('mainInformation', index, e);
              }}
            />
          </div>
          <div>
            <div>Ответственности</div>
            <ul className='w-80 rounded flex flex-col'>
              {item.responsibilities.map((response, ind) => (
                <li key={ind} className='m-2 p-2 border'>
                  <div className="flex flex-row w-full justify-between">
                    <span>{response}</span>
                    <span
                      className="cursor-pointer flex justify-end"
                      onClick={() => handleDeleteResponibilities(index, ind)}
                    >
                      &#10006;
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-8">
              <Input
                placeholder=""
                value={responsebilitiesInputValue}
                handleChange={(e) => setResponsebilitiesInputValue(e)}
                className="w-40"
              />
              <Button
                text="Добавить"
                onClick={() => handleAddResponibilities(index, responsebilitiesInputValue)
                }
              />
            </div>
          </div>
          <div>
        <div>Скилы:</div>
        <div>
          <Tags
            tagsValue={item.skills}
            isClosable={true}
            handleClose={(tag) => {
              handleDaleteTag(index, tag);
            }}
          />
          <div className="flex gap-3 mt-8">
            <Input
              placeholder=""
              value={skillsInputValue}
              handleChange={(e) => setSkillsInputValue(e)}
              className="w-40"
            />
            <Button text="Добавить" onClick={() => handleTagAdd(index, skillsInputValue)} />
          </div>
        </div>
      </div>
        </div>
      ))}

      <Button
      text='Сохранить'
      onClick={() => handleFinish({ userId, project: mainInfo })}
      />
    </form>
  );
};
