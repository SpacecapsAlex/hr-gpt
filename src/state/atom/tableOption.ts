import { atom, RecoilState } from 'recoil';
import { CandidatesTableType } from '../../types/types';

export const tableOptionState: RecoilState<CandidatesTableType> = atom({
  key: 'TableOption',
  default: {
    countItems: 5,
    currentPage: 1,
    searchString: '',
    filterSettings: {
      firstName: '',
      surName: '',
      age: null,
      citizenship: '',
      location: '',
      professionalLevel: '',
      workExperience: null,
      skills: [],
      languges: [],
    },
  },
});
