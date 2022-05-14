import React from 'react';
import Slider from 'react-slick';
import { CarouselWrapper, ImageContainer } from './style';

interface ListItem {
  id: number;
  alt: string;
  src: string;
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
            <img src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default React.memo(Carousel);
