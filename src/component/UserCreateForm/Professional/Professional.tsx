import { FC } from 'react';
import { positionList, profLevelList, workLevelList } from '../UserMockData';

import { SelectList } from '../../SelectList/SelectList';

type Props = {
  handleChange: (name: string, value: string | boolean | number) => void;
  position?: string;
  professionalLevel?: string;
  workLevelSkill?: number;
};

export const Professional: FC<Props> = ({
  handleChange,
  position,
  professionalLevel,
  workLevelSkill,
}) => (
  <>
    <SelectList
      options={positionList}
      value={position}
      handleChange={(value) => handleChange('position', value)}
      placeholder="Позиция"
    />
    <SelectList
      options={profLevelList}
      value={professionalLevel}
      handleChange={(value) => handleChange('professionalLevel', value)}
      placeholder="Профессиональный уровень"
    />
    <SelectList
      options={workLevelList}
      value={workLevelSkill?.toString()}
      handleChange={(value) => handleChange('workLevelSkill', value)}
      placeholder="Опыт работы, лет"
    />
  </>
);
