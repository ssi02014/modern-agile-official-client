import React from 'react';
import { DefaultInnerContainer, HeaderInnerContainer } from './style';

interface Props {
  children: React.ReactNode;
}
const InnerContainer = ({ children }: Props) => {
  return <DefaultInnerContainer>{children}</DefaultInnerContainer>;
};

InnerContainer.Header = ({ children }: Props) => {
  return <HeaderInnerContainer>{children}</HeaderInnerContainer>;
};

export default InnerContainer;
