import { FC, ReactNode } from 'react';
import { Modal as ModalComponent, ButtonProps } from 'antd';

import styles from './styles.module.css';

export type ModalPropsType = {
  isOpen: boolean;
  children?: string | ReactNode;
  title?: string;
  isCentered?: boolean;
  isClosable?: boolean;
  footer?: ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  width?: string | number;
  handleOk?: () => void;
  handleCancel?: () => void;
  isConfirmLoading?: boolean; // apply loading visual effect for OK button
};

export const Modal: FC<ModalPropsType> = ({
  children,
  title,
  handleCancel,
  handleOk,
  isConfirmLoading,
  isOpen,
  isCentered,
  isClosable,
  footer,
  okButtonProps,
  cancelButtonProps,
  width,
}) => (
  <ModalComponent
    title={title}
    onCancel={handleCancel}
    onOk={handleOk}
    footer={footer}
    open={isOpen}
    confirmLoading={isConfirmLoading}
    centered={isCentered}
    okButtonProps={okButtonProps}
    cancelButtonProps={cancelButtonProps}
    width={width}
    className={styles.wrapper}
    closable={isClosable}
  >
    {children}
  </ModalComponent>
);
