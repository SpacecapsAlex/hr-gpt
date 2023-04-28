import React, { FC } from 'react';
import { Card } from 'antd';

export type CardPropsType = {
  title?: string;
  extraText?: string;
  extraLink?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  className?: string;
};

export const UserCard: FC<CardPropsType> = ({
  title, extraText, extraLink, height, width, children, className,
}) => (
  <Card
    title={title}
    extra={<a href={extraLink}>{extraText}</a>}
    className={className}
    style={{ width, height }}
  >
    {children}
  </Card>
);
