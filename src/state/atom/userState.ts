import { atom, RecoilState } from 'recoil';

export type userStateType = {
  id: string;
  login: string;
};

export const userState: RecoilState<userStateType> = atom({
  key: 'userState',
  default: {
    id: '',
    login: '',
  },
});
