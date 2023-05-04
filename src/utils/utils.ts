import { cloneDeep as cloneDeepLodash } from 'lodash';

export const convertDate = (date: string) => {
  const parts = date.split('/');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};

// eslint-disable-next-line arrow-body-style
export const disabledFutureDate = (current: Date): boolean => {
  return current && current > new Date();
};

export const cloneDeep = <T>(target: T) => cloneDeepLodash(target);
