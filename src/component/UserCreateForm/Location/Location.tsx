import { FC } from 'react';
import { countryList } from '../UserMockData';
import { InputComponent } from '../../Input/Input';

import { SelectList } from '../../SelectList/SelectList';

type Props = {
  handleChange: (name: string, value: string | boolean | number) => void;
  citizenship?: string;
  country?: string;
  city?: string;
};

export const Location: FC<Props> = ({
  handleChange,
  citizenship,
  country,
  city,
}) => (
  <>
    <SelectList
      options={countryList}
      value={citizenship}
      handleChange={(value) => handleChange('citizenship', value)}
      placeholder="Гражданство"
    />
    <SelectList
      options={countryList}
      value={country}
      handleChange={(value) => handleChange('country', value)}
      placeholder="Страна проживания"
    />
    <InputComponent
      placeholder="Город проживания"
      handleChange={(value) => handleChange('city', value)}
      value={city as string}
    />
  </>
);
