/* eslint-disable max-lines */
export type InputType = {
  placeholder: string;
  value: string;
  handleChange: (e: string) => void;
  isDisabled?: boolean;
  className?: string;
  rows?: number;
  autoSize?: boolean;
};

type ModeDateType = 'time' | 'date' | 'month' | 'year';

export type DatePickerType = {
  handleChange: (date: string) => void;
  defaultDate?: string;
  value?: string;
  label?: string;
  mode?: ModeDateType;
};

export type CheckBoxType = {
  handleChange: (value: boolean) => void;
  checkBoxText: string;
  className: string;
  value?: boolean;
};

export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
  className?: string;
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
  value?: string | boolean | number;
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

export type UpdateUserProfileInformationType = {
  userId: string;
  firstName: string;
  surName: string;
  lastName: string;
  birthday: string;
  citizenship: string;
  country: string;
  city: string;
  position: string;
  workSkillsString: number;
  professionalLevelName: string;
};

export type AdditionalInformationType = {
  title: string;
  description: string;
};
export type UpdateUserMainInformationType = {
  userId: string;
  information: AdditionalInformationType[];
};

export type EducationUserType = {
  EducationTypeName: string;
  startYear: number;
  finishYear: number;
  institution: string;
  specialization: string;
  mainInformation: string;
};

export type UpdateUserEducationType = {
  userId: string;
  educations: EducationUserType[];
};

export type ContactType = {
  name: string;
  value: string;
  isMain: boolean;
};

export type UpdateUserContactsType = {
  userId: string;
  contacts: ContactType[];
};

export type LanguagesType = {
  name: string;
  level: string;
  isMain: boolean;
};

export type UpdateUserLanguagesType = {
  userId: string;
  languages: LanguagesType[];
};
export type UpdateUserSkillsType = {
  userId: string;
  skills: string[];
};

export type ProjectType = {
  name: string;
  startDate: string;
  endDate: string;
  time: string;
  position: string;
  description: string;
  responsibilities: string[];
  someInformation: string;
  mainInformation: string;
  skills: string[];
};

export type UpdateUserProjectType = {
  userId: string;
  project: ProjectType[];
};

export type GetUserType = {
  firstName: string;
  surName: string;
  lastName: string;
  birthday: string;
  citizenship: string;
  country: string;
  city: string;
  position: string;
  workLevel: string;
  workSkillsString: number;
  additionalInfo: AdditionalInformationType[];
  educationInfo: EducationUserType[];
  contactInfo: ContactType[];
  languageInfo: LanguagesType[];
  skillInfo: string[];
  projectInfo: ProjectType[];
};
type AdditionalType = {
  title: string;
  description: string;
};

type EducationType = {
  startYear: number;
  finishYear: number;
  institution: string;
  specialization: string;
  mainInformation: string;
  educationTypeName: string;
};

type LanguageType = {
  name: string;
  level: string;
  isPrimary: boolean;
};

type SkillsType = {
  name: string;
};

type ProjectsType = {
  name: string;
  startDate: string;
  endDate: string;
  time: string;
  position: string;
  description: string;
  someInformation: string;
  mainInformation: string;
  // responsibilities: string[];   // TODO nested arrays. need to think
  // skills: string[];
};

export type CreateUserType = {
  firstName: string;
  surName: string;
  lastName: string;
  birthday?: string;
  citizenship: string;
  country: string;
  city: string;
  position: string;
  professionalLevel: string;
  workLevelSkill?: number;
  additional: AdditionalType[];
  educations: EducationType[];
  contacts: ContactType[];
  languages: LanguageType[];
  skills: SkillsType[];
  projects: ProjectsType[];
};

export type CreateUserArrayTypeKeys =
  | 'additional'
  | 'educations'
  | 'contacts'
  | 'languages'
  | 'skills'
  | 'projects';

export type ArrayKeys =
  | 'title'
  | 'description'
  | 'startYear'
  | 'finishYear'
  | 'institution'
  | 'specialization'
  | 'mainInformation'
  | 'educationTypeName'
  | 'name'
  | 'value'
  | 'isPrimary'
  | 'level'
  | 'isPrimary'
  | 'position'
  | 'description'
  | 'someInformation'
  | 'responsibilities'
  | 'skills';
