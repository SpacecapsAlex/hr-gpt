import { atom } from 'recoil';

export const tableOptionState = atom({
  key: 'TableOption',
  default: {
    countItems: 5,
    currentPage: 1,
    searchString: '',
  },
});
