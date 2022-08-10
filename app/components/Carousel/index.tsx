import React from 'react';
import Slider from 'react-slick';
import { CarouselWrapper, ImageContainer } from './style';

interface ListItem {
  id: number;
  alt: string;
  src: string;
  webp: string;
}
interface Props {
  list: ListItem[];
  settings: any;
}

const Carousel = ({ list, settings }: Props) => {
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {list.map((item) => (
          <ImageContainer key={item.id}>
            <picture>
              <source srcSet={item.webp} type="image/webp" />
              <img src={item.src} alt={item.alt} />
            </picture>
          </ImageContainer>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
