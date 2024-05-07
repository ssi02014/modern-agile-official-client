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
              width="1425"
              height="810"
              src="https://www.youtube.com/embed/RCAlGiLJrCc"
              title="[모던 애자일팀] JWT(JSON Web Token) - 안진우(7기)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
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
