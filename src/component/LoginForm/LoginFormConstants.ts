import { FormItemType } from '../../types/types';

export const loginItems:FormItemType[] = [
  {
    name: 'login',
    label: 'input',
    isRequared: true,
    validationMassage: 'enter something',
    itemType: 'input',
    placeholder: 'Введите логин',
    value: '',
  },
  {
    name: 'password',
    label: 'input',
    isRequared: true,
    validationMassage: 'enter something',
    itemType: 'input',
    placeholder: 'Введите пароль',
    value: '',
  },
];
