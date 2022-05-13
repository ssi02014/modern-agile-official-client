import React from 'react';
import dynamic from 'next/dynamic';
import {
  MainBannerWrapper,
  BannerTitleContainer,
  IconContainer,
} from './style';
import ArrowBottom from 'assets/arrow_bottom.svg';
import activityImg1 from 'assets/activity_1.png';
import activityImg2 from 'assets/activity_2.png';
import activityImg3 from 'assets/activity_3.png';
import activityImg4 from 'assets/activity_4.png';
import activityImg5 from 'assets/activity_5.png';
import activityImg6 from 'assets/activity_6.png';
import activityImg7 from 'assets/activity_7.png';
import activityImg8 from 'assets/activity_8.png';

const Carousel = dynamic(() => import('../Carousel'), { ssr: false });

const MainBanner = () => {
  const list = [
    {
      id: 1,
      alt: '활동',
      src: activityImg1,
    },
    {
      id: 2,
      alt: '활동',
      src: activityImg2,
    },
    {
      id: 3,
      alt: '활동',
      src: activityImg3,
    },
    {
      id: 4,
      alt: '활동',
      src: activityImg4,
    },
    {
      id: 5,
      alt: '활동',
      src: activityImg5,
    },
    {
      id: 6,
      alt: '활동',
      src: activityImg6,
    },
    {
      id: 7,
      alt: '활동',
      src: activityImg7,
    },
    {
      id: 8,
      alt: '활동',
      src: activityImg8,
    },
  ];

  return (
    <MainBannerWrapper>
      <BannerTitleContainer>
        <h1>MODERN AGILE</h1>
        <p>모던 애자일은 개발자로서 핵심 역량을 기르고</p>
        <p>IT 산업의 미래 인재로 성장합니다.</p>
      </BannerTitleContainer>
      <Carousel list={list} />

      <IconContainer>
        <ArrowBottom />
      </IconContainer>
    </MainBannerWrapper>
  );
};

export default MainBanner;
