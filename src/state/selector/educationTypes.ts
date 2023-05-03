import axios from 'axios';
import { RecoilValueReadOnly, selector } from 'recoil';
import { RadioOption } from '../../types/types';

export const educationTypesQuery: RecoilValueReadOnly<RadioOption[]> = selector({
  key: 'educationTypesQuery',
  get: async () => {
    const selectorOption:RadioOption[] = [];
    const { data } = await axios.get<string[]>(
      'http://spacecapsalex-002-site1.atempurl.com/User/GetEducationTypes',
    );
    data.forEach((level) => {
      selectorOption.push({
        value: level,
        label: level,
      });
    });
    return selectorOption;
  },
});
