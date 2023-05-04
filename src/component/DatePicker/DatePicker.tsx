import { DatePicker, DatePickerProps } from 'antd';
import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePickerType } from '../../types/types';

export const DatePickerComponent: FC<DatePickerType> = ({
  handleChange,
  defaultDate,
  label,
  mode,
  disabledDate,
}) => {
  const dateFormat = mode === 'year' ? 'YYYY' : 'DD/MM/YYYY';
  dayjs.extend(customParseFormat);
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    handleChange(dateString);
  };

  return (
    <>
      {!!label && <label>{label}</label>}
      <DatePicker
        onChange={onChange}
        format={dateFormat}
        defaultValue={defaultDate ? dayjs(defaultDate, dateFormat) : dayjs()}
        // eslint-disable-next-line arrow-body-style
        disabledDate={(current: Dayjs) => {
          return disabledDate?.(current.toDate()) as boolean;
        }}
      />
    </>
  );
};
