export type InputType = {
  placeholder: string;
  value: string;
  handleChange: (e: string) => void;
  isDisabled?: boolean;
  className?: string;
};

export type DatePickerType = {
<<<<<<< HEAD
  handleChange: (date:string) => void,
  defaultDate?:string,
  value?:string,
=======
  handleChange: (date: string) => void;
  defaultDate: string;
>>>>>>> develop
};

export type CheckBoxType = {
  handleChange: (value: boolean) => void;
  checkBoxText: string;
  className: string;
};
<<<<<<< HEAD
export type RadioOption = {
  label:string;
=======
type RadioOption = {
  label: string;
>>>>>>> develop
  value: string;
  disabled?: boolean;
};

export type RadioButtonGroupType = {
  options: RadioOption[];
  defaultValue?: string;
<<<<<<< HEAD
  value?: string;
  handleChange:(value:string) => void;
=======
  handleChange: (value: string) => void;
};

export type ScrollTableType = {
  x?: string | number | true;
  y?: string | number;
} & {
  scrollToFirstRowOnChange?: boolean;
>>>>>>> develop
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
  validationMassage?: string;
  name: string;
  label?: string;
  placeholder?: string
};

export type FormComponentType = {
  formItems: FormItemType[];
  handleFinish: (values: any) => void;
  className: string
};
