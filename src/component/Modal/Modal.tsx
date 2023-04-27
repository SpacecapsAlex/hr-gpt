import { FC, ReactNode } from 'react';
import { Modal as ModalComponent, ButtonProps } from 'antd';

import styles from './styles.module.css';

type ButtonPropsType = {
  isOpen: boolean;
  content?: string | ReactNode;
  title?: string;
  isDisabled?: boolean;
  isCentered?: boolean;
  footer?: ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  width?: string | number;
  handleOk?: () => void;
  handleCancel?: () => void;
  isConfirmLoading?: boolean; // apply loading visual effect for OK button
};

export const Modal: FC<ButtonPropsType> = ({
  content,
  title,
  handleCancel,
  handleOk,
  isConfirmLoading,
  isOpen,
  isCentered,
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
  >
    {content}
  </ModalComponent>
);
