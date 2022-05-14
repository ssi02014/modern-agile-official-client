import React from 'react';
import { BoxWrapper, BoxEmploymentWrapper } from './style';

interface Props {
  title?: string;
  desc?: string;
}
const Box = ({ title = '', desc = '' }: Props) => {
  return (
    <BoxWrapper>
      <h3>{title}</h3>
      <p>{desc}</p>
    </BoxWrapper>
  );
};

Box.Employment = ({ title = '', desc = '' }: Props) => {
  return (
    <BoxEmploymentWrapper>
      <h3>{title}</h3>
      <p>{desc}</p>
    </BoxEmploymentWrapper>
  );
};
export default Box;
