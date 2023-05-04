import { FC } from 'react';
import { DatePickerComponent } from '../../DatePicker/DatePicker';
import { InputComponent } from '../../Input/Input';

import styles from '../styles.module.css';
import { convertDate, disabledFutureDate } from '../../../utils/utils';

type Props = {
  handleChange: (name: string, value: string | boolean | number) => void;
  firstName?: string;
  surName?: string;
  lastName?: string;
  birthday?: string;
};

export const Personal: FC<Props> = ({
  handleChange,
  firstName,
  surName,
  lastName,
  birthday,
}) => (
  <ul className={styles.wrapper}>
    <li className={styles.formItem}>
      <InputComponent
        placeholder="Имя"
        handleChange={(value) => handleChange('firstName', value)}
        value={firstName as string}
      />
    </li>
    <li className={styles.formItem}>
      <InputComponent
        placeholder="Фамилия"
        handleChange={(value) => handleChange('surName', value)}
        value={surName as string}
      />
    </li>
    <li className={styles.formItem}>
      <InputComponent
        placeholder="Отчество"
        handleChange={(value) => handleChange('lastName', value)}
        value={lastName as string}
      />
    </li>
    <li style={{ flexBasis: '100%' }}>
      <DatePickerComponent
        handleChange={(value) => {
          handleChange('birthday', convertDate(value));
        }}
        label="Дата рождения "
        value={birthday as string}
        disabledDate={disabledFutureDate}
      />
    </li>
  </ul>
);
