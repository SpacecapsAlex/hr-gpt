import { FC, ReactNode } from 'react';
import { Button as ButtonComponent } from 'antd';

type ButtonType = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';

type ButtonPropsType = {
  type?: ButtonType;
  text?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isTransparent?: boolean; // make button transparent and visible on hover
  isDanger?: boolean; // make button red
  isParentWidth?: boolean; // width of button equal width of its parent
  icon?: ReactNode;
  shape?: 'default' | 'circle' | 'round';
  href?: string;
  size?: 'large' | 'middle' | 'small';
  className?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonPropsType> = ({
  type = 'default',
  text,
  isLoading,
  isDisabled,
  isTransparent,
  isDanger,
  isParentWidth,
  icon,
  shape,
  href,
  size,
  className,
  onClick,
}) => (
  <ButtonComponent
    type={type}
    loading={isLoading}
    icon={icon}
    disabled={isDisabled}
    ghost={isTransparent}
    danger={isDanger}
    block={isParentWidth}
    shape={shape}
    href={href}
    size={size}
    onClick={onClick}
    className={className}
  >
    {text}
  </ButtonComponent>
);
