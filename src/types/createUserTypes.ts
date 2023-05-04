type AdditionalType = {
  title: string;
  description: string;
};

export type EducationType = {
  startYear: number;
  finishYear: number;
  institution: string;
  specialization: string;
  mainInformation: string;
  educationTypeName: string;
};

export type ContactType = {
  name: string;
  value: string;
  isMain: boolean;
};

export type LanguageType = {
  name: string;
  level: string;
  isMain: boolean;
};

type SkillsType = {
  name: string;
};

type ProjectsType = {
  name?: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  position?: string;
  description?: string;
  someInformation?: string;
  mainInformation?: string;
  // responsibilities: string[];   // TODO nested arrays. need to think
  // skills: string[];
};

export type CreateUserType = {
  firstName?: string;
  surName?: string;
  lastName?: string;
  birthday?: string;
  citizenship?: string;
  country?: string;
  city?: string;
  position?: string;
  professionalLevel?: string;
  workLevelSkill?: number;
  additional: AdditionalType[];
  educations: EducationType[];
  contacts: ContactType[];
  languages: LanguageType[];
  skills: SkillsType[];
  projects: ProjectsType[];
};

export type UserArrayTypes =
  | AdditionalType
  | EducationType
  | ContactType
  | LanguageType
  | SkillsType
  | ProjectsType;

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
  | 'level'
  | 'isMain'
  | 'position'
  | 'description'
  | 'someInformation'
  | 'responsibilities'
  | 'skills';
