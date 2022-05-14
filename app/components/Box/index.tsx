import React from 'react';
import { BoxWrapper } from './style';

interface Props {
  title: string;
  desc: string;
}
const Box = ({ title, desc }: Props) => {
  return (
    <BoxWrapper>
      <h3>{title}</h3>
      <p>{desc}</p>
    </BoxWrapper>
  );
};

export default Box;
