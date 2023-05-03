import { Tag } from 'antd';
import { FC } from 'react';

type TagsType = {
  tagsValue?: string[];
  isClosable: boolean;
  handleClose?: (index: number) => void;
};

export const Tags: FC<TagsType> = ({
  tagsValue,
  handleClose,
  isClosable = true,
}) => (
  <>
    {tagsValue?.map((tag, index) => (
      <Tag key={index} closable={isClosable} onClose={() => handleClose?.(index)}>
        {tag}
      </Tag>
    ))}
  </>
);
