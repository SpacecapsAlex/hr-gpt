import { Select } from 'antd';
import { FC } from 'react';

type OptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectListType = {
  defaultValue: string;
  options: OptionType[];
  value?: string;
  handleChange?: (value: string, option: OptionType | OptionType[]) => void;
  handleSearch?: (value: string) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  isAbleClear?: boolean;
  isSearch?: boolean;
  className?: string;
  placeholder?: string;
  mode?: 'multiple' | 'tags';
};

export const SelectListComponent: FC<SelectListType> = ({
  defaultValue,
  options,
  value,
  handleChange,
  handleSearch,
  isDisabled,
  isLoading,
  isAbleClear,
  isSearch,
  placeholder,
  mode,
}) => (
  <Select
    defaultValue={defaultValue}
    options={options}
    value={value}
    disabled={isDisabled}
    loading={isLoading}
    allowClear={isAbleClear}
    showSearch={isSearch}
    onChange={handleChange}
    onSearch={handleSearch}
    placeholder={placeholder}
    mode={mode}
  />
);
