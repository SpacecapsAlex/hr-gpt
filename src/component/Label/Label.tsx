import { FC } from 'react';
import { Typography } from 'antd';
import { BlockProps } from 'antd/es/typography/Base';

type LabelType = {
  type: 'title' | 'paragraph';
  text: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  isEditable?: BlockProps['editable'];
  isCopyable?: BlockProps['copyable'];
};

const { Title, Paragraph } = Typography;

export const Label: FC<LabelType> = ({
  text,
  titleLevel,
  isEditable,
  isCopyable,
  type,
}) => (
  <>
    {type === 'title' ? (
      <Title
        level={titleLevel}
        editable={isEditable}
        copyable={isCopyable}
        className="flex items-end"
      >
        {text}
      </Title>
    ) : (
      <Paragraph editable={isEditable} copyable={isCopyable}>
        {text}
      </Paragraph>
    )}
  </>
);
