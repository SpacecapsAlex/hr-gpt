import { FC } from 'react';
import { FormComponent } from '../Form/FormComponent';
import { createUserItems } from './UserMockData';
import { createNewUser } from '../../api/createUser';

import styles from './styles.module.css';

export type AlertPropsType = {};

export const UserCreateForm: FC<AlertPropsType> = () => (
  <FormComponent
    formItems={createUserItems}
    handleFinish={createNewUser}
    classNameWrapper={styles.wrapper}
    classNameItem={styles.formItem}
    buttonText="Создать пользователя"
  />
);
