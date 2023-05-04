import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { FC } from 'react';
import { CheckBoxType } from '../../types/types';

export const CheckBoxComponent: FC<CheckBoxType> = ({
  handleChange,
  checkBoxText,
  className,
  value = false,
}) => {
  const onChange = (e: CheckboxChangeEvent) => {
    handleChange(e.target.checked);
  };
  return (
    <Checkbox className={className} onChange={onChange} checked={value}>
      {checkBoxText}
    </Checkbox>
  );
};
