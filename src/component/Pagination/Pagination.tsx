import { Pagination } from 'antd';
import { FC, useEffect, useState } from 'react';

import './styles.css';

export type PaginationProps = {
  className?: string;
  isDisabled?: boolean;
  totalItemsOnPage?: number;
  handleChange?: (page: number, pageSize: number) => void;
  totalItems?: number;
};

export const PaginationComponent:FC<PaginationProps> = ({
  className, isDisabled, totalItemsOnPage, handleChange, totalItems,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItemsOnPageState, setTotalItemsOnPageState] = useState<number>(5);
  const [totalItemsState, setTotalItemsState] = useState<number>(50);

  useEffect(() => {
    if (totalItemsOnPage) {
      setTotalItemsOnPageState(totalItemsOnPage);
    }
  }, [totalItemsOnPage]);

  useEffect(() => {
    if (totalItems) {
      setTotalItemsState(totalItems);
    }
  }, [totalItems]);

  return (
    <Pagination
      showSizeChanger={false}
      className={className}
      disabled={isDisabled}
      pageSize={totalItemsOnPageState}
      showQuickJumper={true}
      hideOnSinglePage={true}
      onChange={(page: number, pageSize: number) => {
        handleChange?.(page, pageSize);
        setCurrentPage(page);
      }}
      current={currentPage}
      total={totalItemsState}
      showTotal={(total, range) => `${range[0]}-${range[1]} из ${total}`}
    />
  );
};
