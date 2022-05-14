import React from 'react';
import { StyledButton, StyledLinkButton } from './style';

interface Props {
  children: React.ReactNode | string;
}

interface LinkProps {
  children: string;
  href: string;
  variant?: string;
  target?: string;
  rel?: string;
  style?: any;
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.Link = ({
  children,
  href,
  target,
  rel,
  variant = '',
  style,
}: LinkProps) => {
  return (
    <StyledLinkButton
      style={style}
      href={href}
      target={target}
      rel={rel}
      variant={variant}>
      {children}
    </StyledLinkButton>
  );
};

export default Button;
