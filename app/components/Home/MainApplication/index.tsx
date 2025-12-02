import React from 'react';
import {
  InnerContainer,
  MainApplicationWrapper,
  ButtonContainer,
} from './style';
import logo from 'assets/logo/main-logo.png';
import Button from 'components/Button';

const MainApplication = () => {
  return (
    <MainApplicationWrapper>
      <InnerContainer>
        <img src={logo} alt="모던애자일 로고" />
        <p>
          모던 애자일이 추구하는 <span>가치와 방향성</span>을 공감 하고
          <span> 함께 성장</span>하고 싶은 사람을 찾습니다.
        </p>
        <ButtonContainer>
          <Button.Link
            href="https://www.notion.so/11-2b9f100dd99e80d8ac4ec284e2f5dce3"
            target="_blank"
            rel="noreferrer"
            variant="primary">
            11기 메인 노션
          </Button.Link>
        </ButtonContainer>
      </InnerContainer>
    </MainApplicationWrapper>
  );
};

export default MainApplication;
