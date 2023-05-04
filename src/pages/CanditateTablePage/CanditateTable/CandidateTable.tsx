import { useRecoilValue } from 'recoil';
import { Table } from '../../../component';
import { candidateTableDataQuery } from '../../../state/selector/getCandidateTableData';
import { columns } from './CandidateTableConstants';

export const CandidateTable = () => {
  const tableRowsData = useRecoilValue(candidateTableDataQuery);
  return <Table
  columns={columns}
  rowsData={tableRowsData.users}
  />;
};
