import { DatePicker, DatePickerProps } from 'antd';
import { FC } from 'react';
import dayjs from 'dayjs';
import { DatePickerType } from '../../types/types';

export const DatePickerComponent: FC<DatePickerType> = ({
  handleChange,
  defaultDate,
  value,
}) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    handleChange(dateString);
  };
  return (
    <DatePicker
      onChange={onChange}
      placeholder='hello world'
      defaultValue={dayjs(defaultDate, 'DD/MM/YYYY')}
      value={dayjs(value, 'DD/MM/YYYY')}
    />
  );
};
