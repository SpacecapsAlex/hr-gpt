import { Input } from 'antd';
import { FC } from 'react';
import { InputType } from '../../types/types';

export const InputComponent: FC<InputType> = ({
  placeholder,
  value,
  handleChange,
  className,
  isDisabled = false,
}) => {
  const { TextArea } = Input;
  return (
    <TextArea
      className={`w-4/12 ${className}`}
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
      onChange={handleChange}
      autoSize
    />
  );
};
