import { Space, Tag } from 'antd';
import React, { FC } from 'react';

type TagsType = {
  tagsValue: string[]
};

export const Tags:FC<TagsType> = ({ tagsValue }) => {
  const handleClose = (index:number) => {
    tagsValue.splice(index, 1);
  };
  return (
    <Space size={[0, 8]} wrap>
      {
        tagsValue.map((tag, index) => (
          <Tag key={index} closable onClose={() => handleClose(index)}>
            {tag}
          </Tag>
        ))
      }
    </Space>
  );
};
