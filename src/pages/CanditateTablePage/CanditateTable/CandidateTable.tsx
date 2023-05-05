import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Button, FilterCardForm, Pagination, Table,
} from '../../../component';
import { Paths } from '../../../constants/path';
import { modalState } from '../../../state/atom/modalState';
import { tableOptionState } from '../../../state/atom/tableOption';
import { candidateTableDataQuery } from '../../../state/selector/getCandidateTableData';

export const CandidateTable = () => {
  const href = useNavigate();
  const tableRowsData = useRecoilValue(candidateTableDataQuery);
  const [filterOptions, setFilterOptions] = useRecoilState(tableOptionState);
  const [modal, setModal] = useRecoilState(modalState);
  const columns = [
    {
      title: 'Имя',
      dataIndex: 'firstName',
    },
    {
      title: 'Фамилия',
      dataIndex: 'surName',
    },
    {
      title: 'Город',
      dataIndex: 'city',
    },
    {
      title: 'Страна',
      dataIndex: 'country',
    },
    {
      title: 'Опыт работы',
      dataIndex: 'workExperience',
    },
    {
      title: 'Уровень',
      dataIndex: 'workLevel',
    },
    {
      title: 'Позиция',
      dataIndex: 'position',
    },
    {
      title: '',
      dataIndex: 'userId',
      render: (userId: string) => (
        <Button
          text="изменить"
          onClick={() => {
            href(`${Paths.updateUser}/${userId}`);
          }}
        />
      ),
    },
  ];
  const handlePagination = (page: number, pageSize: number) => {
    setFilterOptions({
      ...filterOptions,
      countItems: pageSize,
      currentPage: page,
    });
  };
  return (
    <>
      <Table columns={columns} rowsData={tableRowsData.users} pagination={false}/>
      <Pagination totalItems={tableRowsData.totalItems} handleChange={handlePagination} className='flex justify-end'/>
      <Button
        text="Найти Кандидата!"
        onClick={() => setModal({
          ...modal,
          isClosable: false,
          isOpen: true,
          children: (
              <Suspense>
                {' '}
                <FilterCardForm
                  handleFilter={(value) => {
                    setModal({
                      ...modal,
                      isOpen: false,
                    });
                    setFilterOptions({
                      ...filterOptions,
                      filterSettings: value,
                    });
                  }}
                />{' '}
              </Suspense>
          ),
        })
        }
      />
    </>
  );
};
