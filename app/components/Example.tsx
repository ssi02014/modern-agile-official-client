import React from 'react';
import styled from 'styled-components';

const Example = () => {
  return <ExampleBox>반응형 및 스타일드 테스트 컴포넌트</ExampleBox>;
};

// theme 사용법과 반응형
const ExampleBox = styled.div`
  background-color: ${({ theme }) => theme.colors.main};

  @media ${({ theme }) => theme.media.desktop} {
    background-color: blue;
  }
`;

export default Example;
