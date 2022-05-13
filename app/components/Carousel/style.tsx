import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 9px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.3;
    border-radius: 9px;
  }
`;
