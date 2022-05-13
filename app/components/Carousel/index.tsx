import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { CarouselWrapper, ImageContainer } from './style';

interface Props {
  list: any[];
}
const Carousel = ({ list }: Props) => {
  const showCount = useMemo(() => {
    if (window.innerWidth < 768) {
      return 2;
    }
    return 4;
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: showCount,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
  };

  console.log(showCount);

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {list.map((item) => (
          <ImageContainer key={item.id}>
            <img src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
