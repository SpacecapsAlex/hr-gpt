/* eslint-disable max-lines */
import { FC, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { professionalLevelsQuery } from '../../state/selector/professionalLevels';
import { FilterSettingsType, RadioOption } from '../../types/types';
import { Button } from '../Button/Button';
import { InputComponent } from '../Input/Input';
import { SelectList } from '../SelectList/SelectList';
import { Tags } from '../Tags/Tags';

type FilterCardFormType = {
  handleFilter: (value:FilterSettingsType) => void
};

export const FilterCardForm:FC<FilterCardFormType> = ({ handleFilter }) => {
  const [filter, setfilter] = useState<FilterSettingsType>({
    firstName: '',
    surName: '',
    age: null,
    citizenship: '',
    location: '',
    professionalLevel: '',
    workExperience: null,
    skills: [],
    languges: [],
  });
  const [skillValue, setSkillValue] = useState<string>('');
  const [languageValue, setLanguageValue] = useState<string>('');
  const professionLevelOption: RadioOption[] = useRecoilValue(
    professionalLevelsQuery,
  );
  return (
    <div className='flex flex-col gap-5 border-2 p-3'>
      <div>
        <div>Имя</div>
        <InputComponent
          value={filter.firstName}
          placeholder={filter.firstName}
          handleChange={(e) => {
            setfilter({ ...filter, firstName: e });
          }}
        />
      </div>
      <div>
        <div>Фамилия</div>
        <InputComponent
          value={filter.surName}
          placeholder={filter.surName}
          handleChange={(e) => {
            setfilter({ ...filter, surName: e });
          }}
        />
      </div>
      <div>
        <div>Возраст</div>
        <InputComponent
          value={`${filter.age === null ? '' : filter.age}`}
          placeholder={`${filter.age}`}
          handleChange={(e) => {
            setfilter({ ...filter, age: +e });
          }}
        />
      </div>
      <div>
        <div>Гражданство</div>
        <InputComponent
          value={filter.citizenship}
          placeholder={filter.citizenship}
          handleChange={(e) => {
            setfilter({ ...filter, citizenship: e });
          }}
        />
      </div>
      <div>
        <div>Город</div>
        <InputComponent
          value={filter.location}
          placeholder={filter.location}
          handleChange={(e) => {
            setfilter({ ...filter, location: e });
          }}
        />
      </div>
      <div>
        <div>Уровень</div>
        <SelectList
          placeholder='выберете уровень'
          options={professionLevelOption}
          handleChange={(value) => setfilter({ ...filter, professionalLevel: value })
          }
        />
      </div>
      <div>
        <div>Опыт работы</div>
        <InputComponent
          value={ `${filter.workExperience}` }
          placeholder={`${filter.workExperience}`}
          handleChange={(e) => {
            setfilter({ ...filter, workExperience: +e });
          }}
        />
      </div>
      <div>
        <div>Скилы</div>
        <Tags
          tagsValue={filter.skills as string[]}
          isClosable={true}
          handleClose={(tag, e) => {
            e.preventDefault();
            setfilter({ ...filter, skills: filter.skills?.filter((item) => item !== tag) ?? [] });
          }}
        />
        <div className="flex gap-3 mt-8">
          <InputComponent
            placeholder=""
            value={skillValue}
            handleChange={(e) => setSkillValue(e)}
            className="w-40"
          />
          <Button
            text="Добавить"
            onClick={() => setfilter({ ...filter, skills: [...filter.skills as string[], skillValue] })}
          />
        </div>
      </div>
      <div>
      <div>Языки</div>
        <Tags
          tagsValue={filter.languges}
          isClosable={true}
          handleClose={(tag, e) => {
            e.preventDefault();
            setfilter({ ...filter, languges: filter.languges.filter((item) => item !== tag) });
          }}
        />
        <div className="flex gap-3 mt-8">
          <InputComponent
            placeholder=""
            value={languageValue}
            handleChange={(e) => setLanguageValue(e)}
            className="w-40"
          />
          <Button
            text="Добавить"
            onClick={() => setfilter({ ...filter, languges: [...filter.languges, languageValue] })}
          />
        </div>
      </div>
      <Button
      onClick={() => handleFilter(filter)}
      text='Найти!'
      className='w-40'
      />
    </div>
  );
};
