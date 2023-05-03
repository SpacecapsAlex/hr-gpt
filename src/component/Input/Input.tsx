import { Input } from 'antd';
import { FC } from 'react';
import { InputType } from '../../types/types';

export const InputComponent: FC<InputType> = ({
  placeholder,
  value,
  handleChange,
  className,
  rows,
  isDisabled = false,
  autoSize = true,
}) => {
  const { TextArea } = Input;
  return (
    <TextArea
      rows={rows}
      className={`w-4/12 ${className}`}
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
      onChange={(e) => handleChange(e.target.value)}
      autoSize={autoSize}
    />
  );
};
