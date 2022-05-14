import React from 'react';
import { LoadingWrapper } from './style';
import PaperAirplane from 'assets/lottie/paper-airplane.gif';

const Loading = () => {
  return (
    <LoadingWrapper>
      <h1>로딩중입니다</h1>
      <img src={PaperAirplane} alt="로딩중" width={200} />
    </LoadingWrapper>
  );
};

export default Loading;
