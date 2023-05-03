import { Tag } from 'antd';
import { FC } from 'react';
import TagsStyles from './TagsStyles.module.css';

type TagsType = {
  tagsValue: string[];
  isClosable: boolean;
  handleClose: (tag: string, e: React.MouseEvent<HTMLElement>) => void;
};

export const Tags: FC<TagsType> = ({
  tagsValue,
  handleClose,
  isClosable = true,
}) => (
  <>
    {tagsValue.map((tag, index) => (
      <Tag className={TagsStyles.closeIcon} key={index} closable={isClosable} onClose={(e: React.MouseEvent<HTMLElement>) => handleClose(tag, e)}>
        {tag}
      </Tag>
    ))}
  </>
);
