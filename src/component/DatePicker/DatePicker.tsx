import { DatePicker, DatePickerProps } from 'antd';
import React, { FC } from 'react';
import dayjs from 'dayjs';
import { DatePickerType } from '../../types/types';

export const DatePickerComponent:FC<DatePickerType> = ({ handleChange, defaultDate }) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    handleChange(dateString);
  };
  return <DatePicker onChange={onChange} defaultValue={dayjs(defaultDate, 'DD/MM/YYYY')} format={'DD/MM/YYYY'}/>;
};
