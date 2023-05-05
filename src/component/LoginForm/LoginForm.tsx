import { useRecoilState } from 'recoil';
import { Form } from '..';
import { LoginQuerry } from '../../api/login';
import { alertState } from '../../state/atom/alertState';
import { LoginFormType } from '../../types/types';
import { loginItems } from './LoginFormConstants';

export const LoginForm = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const handleLogin = (value: LoginFormType) => {
    LoginQuerry(value).then((response) => {
      localStorage.setItem('userData', JSON.stringify(response));
    }).catch((error) => {
      setAlert({
        ...alert,
        isShow: true,
        type: 'error',
        title: 'Ошибка при авторизации!',
        description: error.response.data,
      });
    });
  };
  return (
    <Form
      formItems={loginItems}
      buttonText="Войти"
      classNameWrapper="border-2 mx-auto mb-8 p-4 w-3/5 "
      classNameItem='my-4 flex justify-center'
      handleFinish={(values) => handleLogin(values)}
      classNameButton="w-20"
    />
  );
};
