import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Modal, Button } from '..';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const ModalComponent: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button text="Open modal" onClick={showModal} />
      <Modal
        {...args}
        isOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        content={
          <div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        }
      />
    </div>
  );
};

ModalComponent.args = {};
