import axios from 'axios';
import { RecoilValueReadOnly, selector } from 'recoil';
import { RadioOption } from '../../types/types';

export const professionalLevelsQuery:RecoilValueReadOnly<RadioOption[]> = selector({
  key: 'professionalLevelsQuery',
  get: async () => {
    const selectorOption:RadioOption[] = [];
    const response = await axios.get<string[]>(
      'http://spacecapsalex-002-site1.atempurl.com/User/GetProfessionalLevels',
    );
    response.data.forEach((level) => {
      selectorOption.push({
        value: level,
        label: level,
      });
    });
    return selectorOption;
  },
});
