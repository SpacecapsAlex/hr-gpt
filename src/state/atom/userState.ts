import { atom, RecoilState } from 'recoil';

export type UserStateType = {
  id: string;
  login: string;
};

export const userState: RecoilState<UserStateType> = atom({
  key: 'userState',
  default: {
    id: '',
    login: '',
  },
});
