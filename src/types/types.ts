export type InputType = {
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
  className?: string;
};

export type DatePickerType = {
  handleChange: (date: string) => void;
  defaultDate: string;
};

export type CheckBoxType = {
  handleChange: (value: boolean) => void;
  checkBoxText: string;
  className: string;
};
type RadioOption = {
  label: string;
  value: string;
};

export type RadioButtonGroupType = {
  options: RadioOption[];
  defaultValue?: string;
  handleChange: (value: string) => void;
};

export type ScrollTableType = {
  x?: string | number | true;
  y?: string | number;
} & {
  scrollToFirstRowOnChange?: boolean;
};
