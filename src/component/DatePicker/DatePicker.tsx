import { DatePicker, DatePickerProps } from 'antd';
import { FC } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePickerType } from '../../types/types';

export const DatePickerComponent: FC<DatePickerType> = ({
  handleChange,
  defaultDate,
}) => {
  const dateFormat = 'DD/MM/YYYY';
  dayjs.extend(customParseFormat);
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    handleChange(dateString);
  };
  return (
    <DatePicker
      onChange={onChange}
      placeholder='hello world'
      format={dateFormat}
      defaultValue={defaultDate ? dayjs(defaultDate, dateFormat) : dayjs()}
    />
  );
};
