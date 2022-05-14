import React from 'react';
import {
  MainEmploymentWrapper,
  InnerContainer,
  ContentsContainer,
} from './style';
import Box from 'components/Box';
import { mainEmploymentData } from './mainEmploymentsData';

const MainEmployment = () => {
  return (
    <MainEmploymentWrapper>
      <InnerContainer>
        <ContentsContainer>
          <h1>수료생 주요 취업 리스트</h1>
        </ContentsContainer>
        <ContentsContainer>
          {mainEmploymentData.map((item) => (
            <Box.Employment key={item.id} title={item.title} desc={item.desc} />
          ))}
        </ContentsContainer>
      </InnerContainer>
    </MainEmploymentWrapper>
  );
};

export default MainEmployment;
