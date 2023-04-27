import { atom } from 'recoil';
import { ModalPropsType } from '../../component/Modal/Modal';

export const modalState = atom<ModalPropsType>({
  key: 'modalState',
  default: {
    isOpen: false,
  },
});
