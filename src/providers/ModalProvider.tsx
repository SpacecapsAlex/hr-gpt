import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { Modal } from '../component';
import { modalState } from '../state/atom/modalState';
import { ModalPropsType } from '../component/Modal/Modal';

export const ModalProvider: FC = () => {
  const [modal, setModal] = useRecoilState<ModalPropsType>(modalState);

  const handleClose = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <Modal
      {...modal}
      handleOk={() => {
        modal.handleOk?.();
        handleClose();
      }}
      handleCancel={() => {
        modal.handleCancel?.();
        handleClose();
      }}
    >
      {modal.children}
    </Modal>
  );
};
