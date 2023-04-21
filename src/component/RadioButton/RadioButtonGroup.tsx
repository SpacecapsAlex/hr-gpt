import { Radio, RadioChangeEvent } from 'antd';
import React, { FC } from 'react';
import { RadioButtonGroupType } from '../../types/types';

export const RadioButtonGroup: FC<RadioButtonGroupType> = ({ options, defaultValue, handleChange }) => {
  const onChange = (e: RadioChangeEvent) => {
    handleChange(e.target.value);
  };
  return <Radio.Group options={options} onChange={onChange} defaultValue={defaultValue} />;
};
