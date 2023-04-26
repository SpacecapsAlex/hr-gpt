import { atom } from 'recoil';

type MenuItemsType = {
  key: string | number;
  label: string;
  icon?: JSX.Element | string;
  path: string;
};

export const menuItemsState = atom<MenuItemsType[]>({
  key: 'menuItemsState',
  default: [],
});
