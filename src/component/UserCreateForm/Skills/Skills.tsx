import { Dispatch, FC, SetStateAction } from 'react';
import {
  CreateUserArrayTypeKeys,
  UserArrayTypes,
} from '../../../types/createUserTypes';
import { Tags } from '../../Tags/Tags';
import { Button } from '../../Button/Button';
import { InputComponent } from '../../Input/Input';

type Props = {
  inputSkillValue: string;
  setInputSkillValue: Dispatch<SetStateAction<string>>;
  skills: string[];
  setSkills: Dispatch<SetStateAction<string[]>>;
  addSkill: (
    value: string,
    mainField: CreateUserArrayTypeKeys,
    initialValue: UserArrayTypes,
  ) => void;
  removeTag: (tag: string) => void;
};

export const Skills: FC<Props> = ({
  inputSkillValue,
  setInputSkillValue,
  skills,
  setSkills,
  addSkill,
  removeTag,
}) => (
  <li>
    <div className="mb-2.5">
      <Tags
        tagsValue={skills}
        isClosable={true}
        handleClose={(tag, e) => {
          e.preventDefault();
          setSkills(skills.filter((skill) => skill !== tag));
          removeTag(tag);
        }}
      />
    </div>
    <>
      <InputComponent
        placeholder="Навыки"
        handleChange={(e) => setInputSkillValue(e)}
        value={inputSkillValue}
        className="mr-2.5"
      />
      <Button
        onClick={
          () => addSkill(inputSkillValue, 'skills', { name: inputSkillValue }) // eslint-disable-line
        }
        text="Добавить навык"
      />
    </>
  </li>
);
