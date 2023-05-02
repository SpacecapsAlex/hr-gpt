import React, { FC } from 'react';
import { alertState } from '../state/atom/alertState';
import { useRecoilState } from 'recoil';
import { Alert } from '../component';
import { AlertPropsType } from '../component/Alert/Alert';

type NotificationProviderType = {
  children: React.ReactNode;
};

export const NotificationProvider: FC<NotificationProviderType> = ({
  children,
}) => {
  const [alert, setAlert] = useRecoilState<AlertPropsType>(alertState);

  return (
    <>
      <Alert
        {...alert}
        handleClose={() => setAlert({ ...alert, isShow: false })}
      />
      {children}
    </>
  );
};
