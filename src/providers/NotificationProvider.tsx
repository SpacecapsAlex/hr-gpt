import React, { FC } from 'react';
import { alertState } from '../state/atom/alertState';
import { useRecoilState } from 'recoil';
import { Alert } from '../component';
import { AlertPropsType } from'../component/Alert/Alert';

type NotificationProviderType = {
  children: React.ReactNode;
};

export const NotificationProvider: FC<NotificationProviderType> = ({ children }) => {
  const [alert, setAlert] = useRecoilState<AlertPropsType>(alertState);

  return (
    <>
      <Alert
        type={alert.type}
        title={alert.title}
        description={alert.description}
        isIconShow={alert.isIconShow}
        isClosable={alert.isClosable}
        isShow={alert.isShow}
        handleClose={() => setAlert({ ...alert, isShow: false })}
        afterClose={alert.afterClose}
      />
      {children}
    </>
  );
};
