import React from 'react';
import { Title } from '../MainValues/style';
import {
  MainActivityWrapper,
  InnerContainer,
  ContentsContainer,
} from './style';
import service from 'assets/lottie/service.gif';
import cooperation from 'assets/lottie/cooperation.gif';
import rocket from 'assets/lottie/rocket.gif';

const MainActivity = () => {
  return (
    <MainActivityWrapper>
      <Title>핵심 역량을 키우기위한 다양한 활동을 합니다.</Title>
      <InnerContainer>
        <ContentsContainer>
          <img src={service} alt="서비스" />
        </ContentsContainer>
        <ContentsContainer>
          <p>
            애자일을 기반으로 기획부터 설계, 디자인, 개발, 배포 등 전체적인
            <span> 소프트웨어 개발 주기</span>를 경험합니다.
          </p>
        </ContentsContainer>
      </InnerContainer>
      <InnerContainer>
        <ContentsContainer>
          <img src={cooperation} alt="서비스" />
        </ContentsContainer>
        <ContentsContainer>
          <p>
            프론트, 백엔드 개발자, 디자이너 각자 다른 분야의 인원들과 협업을
            통해 <span> 커뮤니케이션 능력</span>을 기릅니다.
          </p>
        </ContentsContainer>
      </InnerContainer>
      <InnerContainer>
        <ContentsContainer>
          <img src={rocket} alt="서비스" />
        </ContentsContainer>
        <ContentsContainer>
          <p>
            동아리 내에서 진행하는 테크톡, 멘토/멘토링 시스템, 동아리 커뮤니티를
            기반으로
            <span> 로켓 성장</span> 할 수 있는 기반을 다집니다.
          </p>
        </ContentsContainer>
      </InnerContainer>
    </MainActivityWrapper>
  );
};

export default MainActivity;
