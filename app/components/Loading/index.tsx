import React from 'react';
import { LoadingWrapper } from './style';
import MainLogo from 'assets/logo/main-logo.png';

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={MainLogo} alt="로딩중" width={200} />
    </LoadingWrapper>
  );
};

export default Loading;
