import React, { ComponentProps, PropsWithChildren } from 'react';
import Slider from 'react-slick';
import { CarouselWrapper } from './style';

interface CarouselProps {
  settings: ComponentProps<typeof Slider>;
}

const Carousel = ({ settings, children }: PropsWithChildren<CarouselProps>) => {
  return (
    <CarouselWrapper>
      <Slider {...settings}>{children}</Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
