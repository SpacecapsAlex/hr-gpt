import { SetterOrUpdater } from 'recoil';
import { AlertPropsType } from '../component/Alert/Alert';

export const handleAlert = (
  status: number | boolean,
  alert: AlertPropsType,
  setAlert: SetterOrUpdater<AlertPropsType>,
) => {
  if (status === 200) {
    setAlert({
      ...alert,
      isShow: true,
    });
  } else {
    setAlert({
      ...alert,
      isShow: true,
      type: 'error',
      title: 'Ошибка!',
      description: 'Что-то пошло не так',
    });
  }
};