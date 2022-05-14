import React from 'react';
import { StyledButton, StyledLinkButton } from './style';

interface Props {
  children: React.ReactNode | string;
}

interface LinkProps {
  children: string;
  href: string;
  target: string;
  rel: string;
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.Link = ({ children, href, target, rel }: LinkProps) => {
  return (
    <StyledLinkButton href={href} target={target} rel={rel}>
      {children}
    </StyledLinkButton>
  );
};

export default Button;
