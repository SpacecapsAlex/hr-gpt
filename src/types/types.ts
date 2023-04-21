export type InputType = {
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
  className?:string
};

export type DatePickerType = {
  handleChange: (date:string) => void,
  defaultDate:string
};

export type CheckBoxType = {
  handleChange: (value:boolean) => void,
  checkBoxText: string,
  className: string,
};
