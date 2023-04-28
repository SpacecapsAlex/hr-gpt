import { Alert as AlertComponent } from 'antd';
import { FC, ReactNode, useEffect } from 'react';

export type AlertPropsType = {
  title: string;
  type: 'success' | 'info' | 'warning' | 'error';
  isIconShow: boolean;
  isClosable: boolean;
  isShow: boolean;
  handleClose?: () => void;
  afterClose?: () => void;
  action?: ReactNode;
  description?: string;
  closeText?: string;
  banner?: boolean; // Display Alert as a banner at top of page
};

export const Alert: FC<AlertPropsType> = ({
  title,
  type,
  isIconShow,
  isClosable,
  isShow,
  handleClose,
  afterClose,
  description,
  closeText,
  banner,
  action,
}) => {
  if (!isShow) {
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose?.();
    }, 4000);
    return () => clearTimeout(timer);
  }, [isShow]);

  return (
    <AlertComponent
      className="absolute top-32 right-0 w-1/4"
      message={title}
      description={description}
      type={type}
      showIcon={isIconShow}
      closable={isClosable}
      onClose={handleClose}
      closeText={closeText}
      banner={banner}
      afterClose={afterClose}
      action={action}
    />
  );
};
