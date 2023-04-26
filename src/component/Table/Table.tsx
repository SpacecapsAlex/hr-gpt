import { FC } from 'react';
import { SpinProps, Table as TableComponent } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import { ScrollTableType } from '../../types/types';

type RowDataType = {
  [key: string]: string | number;
};

type TableType = {
  columns: ColumnsType;
  rowsData: RowDataType[];
  pagination?: false | TablePaginationConfig;
  //   Don't refactor this line. We need here false, not boolean
  rowSelection?: TableRowSelection<object>;
  loading?: boolean | SpinProps;
  scroll?: ScrollTableType;
};

export const Table: FC<TableType> = ({
  columns,
  rowsData,
  pagination,
  rowSelection,
  loading,
  scroll,
}) => (
  <TableComponent
    columns={columns}
    dataSource={rowsData}
    pagination={pagination}
    rowSelection={rowSelection}
    loading={loading}
    scroll={scroll}
  />
);
