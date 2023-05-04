import axios from 'axios';
import { RecoilValueReadOnly, selector } from 'recoil';
import { CadidateTableType } from '../../types/types';
import { tableOptionState } from '../atom/tableOption';

export const candidateTableDataQuery:RecoilValueReadOnly<CadidateTableType> = selector({
  key: 'CandidateTableData',
  get: async ({ get }) => {
    const { countItems, currentPage, searchString } = get(tableOptionState);
    const response = await axios.get<CadidateTableType>(
      'http://spacecapsalex-002-site1.atempurl.com/User/GetUsers',
      {
        params: {
          countItems,
          currentPage,
          searchString,
        },
      },
    );
    return response.data;
  },
});
