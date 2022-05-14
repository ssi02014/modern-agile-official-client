import React, { ForwardedRef, forwardRef } from 'react';
import { BoxWrapper } from './style';

interface Props {
  title: string;
  desc: string;
}
const Box = forwardRef(
  ({ title, desc }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <BoxWrapper ref={ref}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </BoxWrapper>
    );
  }
);

export default Box;
