import React from 'react';
import dynamic from 'next/dynamic';
import {
  MainBannerWrapper,
  BannerTitleContainer,
  IconContainer,
} from './style';
import ArrowBottom from 'assets/arrow_bottom.svg';
import { BannerCarouselData } from './bannerCarouselData';

const Carousel = dynamic(() => import('../Carousel'), { ssr: false });

const MainBanner = () => {
  return (
    <MainBannerWrapper>
      <BannerTitleContainer>
        <h1>MODERN AGILE</h1>
        <p>모던 애자일은 개발자로서 핵심 역량을 기르고</p>
        <p>IT 산업의 미래 인재로 성장합니다.</p>
      </BannerTitleContainer>
      <Carousel list={BannerCarouselData} />

      <IconContainer>
        <ArrowBottom />
      </IconContainer>
    </MainBannerWrapper>
  );
};

export default MainBanner;
