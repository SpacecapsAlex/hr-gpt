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
