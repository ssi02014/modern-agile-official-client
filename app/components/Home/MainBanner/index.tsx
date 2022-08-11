import React, { useMemo } from 'react';
import ArrowBottom from 'assets/arrow_bottom.svg';
import Carousel from 'components/Carousel';
import {
  MainBannerWrapper,
  BannerTitleContainer,
  IconContainer,
  InnerContainer,
} from './style';
import { BannerCarouselData } from './bannerCarouselData';

const MainBanner = () => {
  const CarouselSettings = useMemo(() => {
    return {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 1,
      arrows: false,
      draggable: true,
    };
  }, []);

  return (
    <MainBannerWrapper>
      <InnerContainer>
        <BannerTitleContainer>
          <h1>MODERN AGILE</h1>
          <p>모던 애자일은 개발자로서 핵심 역량을 기르고</p>
          <p>IT 산업의 미래 인재로 성장합니다.</p>
        </BannerTitleContainer>

        <Carousel settings={CarouselSettings} list={BannerCarouselData} />
        {/* <IconContainer>
          <ArrowBottom />
        </IconContainer> */}
      </InnerContainer>
    </MainBannerWrapper>
  );
};

export default MainBanner;
