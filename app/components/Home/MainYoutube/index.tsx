import React from 'react';
import { Title } from '../MainValues/style';
import {
  InnerContainer,
  MainYoutubeWrapper,
  IframeContainer,
  ContentsContainer,
  YoutubeContainer,
  YoutubeItemContainer,
} from './style';
import { techTalkData } from './techTalkData';

const MainYoutube = () => {
  return (
    <MainYoutubeWrapper>
      <InnerContainer>
        <Title>테크톡 영상 자료는 모던 애자일 유튜브를 통해 공유됩니다</Title>
        <ContentsContainer>
          <IframeContainer>
            <iframe
              width="743"
              height="480"
              src="https://www.youtube.com/embed/_ZtYY_aFFaU"
              title="[모던 애자일팀] 백엔드 서버 띄우는 법 - 이희민 (9기)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </IframeContainer>
          <YoutubeContainer>
            {techTalkData.map((item) => (
              <YoutubeItemContainer key={item.id}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.src} alt="" />
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.presenter}</p>
                  </div>
                </a>
              </YoutubeItemContainer>
            ))}
          </YoutubeContainer>
        </ContentsContainer>
      </InnerContainer>
    </MainYoutubeWrapper>
  );
};

export default MainYoutube;
