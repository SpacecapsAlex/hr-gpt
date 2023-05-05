import axios from 'axios';
import { RecoilValueReadOnly, selector } from 'recoil';
import { CadidateTableType, CandidatesTableType } from '../../types/types';
import { tableOptionState } from '../atom/tableOption';

export const candidateTableDataQuery:RecoilValueReadOnly<CadidateTableType> = selector({
  key: 'CandidateTableData',
  get: async ({ get }) => {
    const tableData:CandidatesTableType = get(tableOptionState);
    const response = await axios.get<CadidateTableType>(
      'http://spacecapsalex-002-site1.atempurl.com/User/GetUsersWithFilter',
      {
        params: {
          countItems: tableData.countItems,
          currentPage: tableData.currentPage,
          searchString: tableData.searchString,
          firstName: tableData.filterSettings.firstName,
          surName: tableData.filterSettings.surName,
          citizenship: tableData.filterSettings.citizenship,
          location: tableData.filterSettings.location,
          professionalLevel: tableData.filterSettings.professionalLevel,
        },
      },
    );
    return response.data;
  },
});
