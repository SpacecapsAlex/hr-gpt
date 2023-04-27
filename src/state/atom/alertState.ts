import { atom } from 'recoil';
import { AlertPropsType } from '../../component/Alert/Alert';

export const alertState = atom<AlertPropsType>({
  key: 'alertState',
  default: {
    title: 'Успешно',
    description: 'Операция прошла успешно',
    type: 'success',
    isIconShow: true,
    isClosable: true,
    isShow: false,
  },
});
