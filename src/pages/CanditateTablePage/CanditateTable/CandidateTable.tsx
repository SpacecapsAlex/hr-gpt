import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Button, FilterCardForm, Table } from '../../../component';
import { Paths } from '../../../constants/path';
import { modalState } from '../../../state/atom/modalState';
import { tableOptionState } from '../../../state/atom/tableOption';
import { candidateTableDataQuery } from '../../../state/selector/getCandidateTableData';
import { columns } from './CandidateTableConstants';

export const CandidateTable = () => {
  const href = useNavigate();
  const tableRowsData = useRecoilValue(candidateTableDataQuery);
  const [filterOptions, setFilterOptions] = useRecoilState(tableOptionState);
  const [modal, setModal] = useRecoilState(modalState);
  return (
<>
<Table
  columns={columns}
  rowsData={tableRowsData.users}
  />
  <Button
  text='Найти Кандидата!'
  onClick = {() => setModal({
    ...modal,
    isClosable: false,
    isOpen: true,
    children: <Suspense> <FilterCardForm handleFilter={
      (value) => {
        setModal({
          ...modal,
          isOpen: false,
        });
        setFilterOptions({
          ...filterOptions,
          filterSettings: value,
        });
      }
    } /> </Suspense>,
  })}
  />
  <Button text='Пример редактирования кондидата' onClick={() => href(Paths.updateUser)}/>
</>
  );
};
