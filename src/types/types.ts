/* eslint-disable max-lines */
export type InputType = {
  placeholder: string;
  value: string;
  handleChange: (e: string) => void;
  isDisabled?: boolean;
  className?: string;
};

type ModeDateType = 'time' | 'date' | 'month' | 'year';

export type DatePickerType = {
  handleChange: (date: string) => void;
  defaultDate?: string;
  value?: string;
  label?: string;
  mode?: ModeDateType;
  disabledDate?: (date: Date) => boolean;
};

export type CheckBoxType = {
  handleChange: (value: boolean) => void;
  checkBoxText: string;
  className?: string;
};

export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioButtonGroupType = {
  options: RadioOption[];
  defaultValue?: string;
  value?: string;
  handleChange: (value: string) => void;
};

export type ScrollTableType = {
  x?: string | number | true;
  y?: string | number;
} & {
  scrollToFirstRowOnChange?: boolean;
};

export type FormItemType = {
  itemType: 'checkBox' | 'datePicker' | 'input' | 'radio' | 'select';
  itemText?: string;
  handleChange?: (
    value: string | boolean | React.ChangeEvent<HTMLTextAreaElement>,
    option?: RadioOption | RadioOption[],
  ) => void;
  handleSearch?: (value: string) => void;
  isDisabled?: boolean;
  className?: string;
  options?: RadioOption[];
  defaultValue?: string;
  value?: string | boolean;
  isLoading?: boolean;
  isAbleClear?: boolean;
  isSearch?: boolean;
  mode?: 'multiple' | 'tags';
  isRequared: boolean;
  break?: boolean;
  validationMassage?: string;
  name: string;
  label?: string;
  placeholder?: string;
  modeDate?: ModeDateType;
  addButton?: boolean;
  addButtonText?: string;
  flexBasis?: string;
};

export type FormComponentType = {
  formItems: FormItemType[];
  handleFinish: (values: any) => void;
  classNameWrapper: string;
  buttonText: string;
  classNameItem?: string;
};
