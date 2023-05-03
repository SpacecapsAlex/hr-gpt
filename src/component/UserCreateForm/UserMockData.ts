/* eslint-disable max-lines */
import { FormItemType } from '../../types/types';

export const countryList = [
  { value: 'Беларусь', label: 'Беларусь' },
  { value: 'Россия', label: 'Россия' },
];

export const positionList = [
  { value: 'QA', label: 'QA' },
  { value: 'frontend', label: 'frontend' },
  { value: 'backend', label: 'backend' },
];

export const profLevelList = [
  { value: 'trainee', label: 'trainee' },
  { value: 'junior', label: 'junior' },
  { value: 'middle', label: 'middle' },
  { value: 'senior', label: 'senior' },
  { value: 'team lead', label: 'team lead' },
];

export const workLevelList = [
  { value: '0', label: '0' },
  { value: '1', label: '2' },
  { value: '3', label: '3' },
  { value: 'Более 3-х лет', label: 'Более 3-х лет' },
];

export const educationList = [
  { value: 'среднее', label: 'среднее' },
  { value: 'средне-техническое', label: 'средне-техническое' },
  { value: 'высшее', label: 'высшее' },
];

export const contactsList = [
  { value: 'Телефон', label: 'Телефон' },
  { value: 'Email', label: 'Email' },
];

export const languagesList = [
  { value: 'Английский', label: 'Английский' },
  { value: 'Белорусский', label: 'Белорусский' },
  { value: 'Русский', label: 'Русский' },
];

export const languageLevelList = [
  { value: 'Native', label: 'Native' },
  { value: 'A1', label: 'A1' },
  { value: 'A2', label: 'A2' },
  { value: 'B1', label: 'B1' },
  { value: 'B2', label: 'B2' },
  { value: 'C1', label: 'C1' },
  { value: 'C2', label: 'B2' },
];

export const initialValues = {
  firstName: '',
  surName: '',
  lastName: '',
  citizenship: '',
  country: '',
  city: '',
  position: '',
  professionalLevel: '',
  additional: [
    {
      title: '',
      description: '',
    },
  ],
  educations: [
    {
      startYear: 0,
      finishYear: 0,
      institution: '',
      specialization: '',
      mainInformation: '',
      educationTypeName: '',
    },
  ],
  contacts: [
    {
      name: '',
      value: '',
      isPrimary: false,
    },
  ],
  languages: [
    {
      name: '',
      level: '',
      isPrimary: false,
    },
  ],
  skills: [
    {
      name: '',
    },
  ],
  projects: [
    {
      name: '',
      startDate: '2023-01-10',
      endDate: '2023-01-10',
      time: '',
      position: '',
      description: '',
      someInformation: '',
      mainInformation: '',
      // responsibilities: string[];
      // skills: string[];
    },
  ],
};

export const createUserItems: FormItemType[] = [
  {
    itemType: 'input',
    isRequared: true,
    name: 'firstName',
    placeholder: 'Имя',
  },
  {
    itemType: 'input',
    isRequared: true,
    name: 'surName',
    placeholder: 'Фамилия',
  },
  {
    itemType: 'input',
    isRequared: false,
    name: 'lastName',
    placeholder: 'Отчество',
  },
  {
    itemType: 'datePicker',
    isRequared: true,
    name: 'birthday',
    label: 'Дата рождения ',
    break: true,
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'citizenship',
    placeholder: 'гражданство',
    options: [
      { value: 'Беларусь', label: 'Беларусь' },
      { value: 'Россия', label: 'Россия' },
    ],
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'country',
    placeholder: 'Страна проживания',
    options: [
      { value: 'Беларусь', label: 'Беларусь' },
      { value: 'Россия', label: 'Россия' },
    ],
  },
  {
    itemType: 'input',
    isRequared: false, // m.b. it is required
    name: 'city',
    placeholder: 'Город проживания',
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'position',
    placeholder: 'Позиция',
    options: [
      { value: 'QA', label: 'QA' },
      { value: 'frontend', label: 'frontend' },
      { value: 'backend', label: 'backend' },
    ],
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'professionalLevel',
    placeholder: 'Профессиональный уровень',
    options: [
      { value: 'trainee', label: 'trainee' },
      { value: 'junior', label: 'junior' },
      { value: 'middle', label: 'middle' },
      { value: 'senior', label: 'senior' },
      { value: 'team lead', label: 'team lead' },
    ],
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'workLevelSkill',
    placeholder: 'Опыт работы',
    options: [
      { value: '0', label: '0' },
      { value: '1', label: '2' },
      { value: '3', label: '3' },
      { value: 'Более 3-х лет', label: 'Более 3-х лет' },
    ],
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'educationTypeName',
    placeholder: 'Образование',
    options: [
      { value: 'среднее', label: 'среднее' },
      { value: 'средне-техническое', label: 'средне-техническое' },
      { value: 'высшее', label: 'высшее' },
    ],
  },
  {
    itemType: 'input',
    isRequared: true,
    name: 'institution',
    placeholder: 'Учебное заведение',
  },
  {
    itemType: 'input',
    isRequared: true,
    name: 'specialization',
    placeholder: 'Специальность',
  },

  {
    itemType: 'datePicker',
    isRequared: true,
    name: 'startYear',
    label: 'Год начала обучения ',
    modeDate: 'year',
  },
  {
    itemType: 'datePicker',
    isRequared: false,
    name: 'finishYear',
    label: 'Год окончания обучения ',
    modeDate: 'year',
    break: true,
  },
  {
    itemType: 'input',
    isRequared: false,
    name: 'mainInformation',
    placeholder: 'Основная информация', // what is it
    break: true,
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'contactName',
    placeholder: 'Контакты',
    options: [
      { value: 'Телефон', label: 'Телефон' },
      { value: 'Email', label: 'Email' },
    ],
  },
  {
    itemType: 'input',
    isRequared: true,
    name: 'contactValue',
    placeholder: 'Номер',
    flexBasis: '25%',
  },
  {
    itemType: 'checkBox',
    isRequared: true,
    name: 'isPrimaryContact',
    itemText: 'Основной контакт',
    addButton: true,
    addButtonText: 'Добавить контакт',
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'languageName',
    placeholder: 'Языки',
    options: [
      { value: 'Английский', label: 'Английский' },
      { value: 'Белорусский', label: 'Белорусский' },
      { value: 'Русский', label: 'Русский' },
    ],
  },
  {
    itemType: 'select',
    isRequared: true,
    name: 'languageValue',
    placeholder: 'Уровень владения',
    options: [
      { value: 'Native', label: 'Native' },
      { value: 'A1', label: 'A1' },
      { value: 'A2', label: 'A2' },
      { value: 'B1', label: 'B1' },
      { value: 'B2', label: 'B2' },
      { value: 'C1', label: 'C1' },
      { value: 'C2', label: 'B2' },
    ],
  },
  {
    itemType: 'checkBox',
    isRequared: true,
    name: 'isPrimaryLanguage',
    itemText: 'Основной язык',
    addButton: true,
    addButtonText: 'Добавить язык',
  },
  {
    itemType: 'input',
    isRequared: false,
    name: 'skillName',
    placeholder: 'Навыки',
    break: true,
  },
  {
    itemType: 'input',
    isRequared: false,
    name: 'additionalTitle',
    placeholder: 'Дополнительная информация',
    break: true,
  },
];
