import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  margin-top: 40px;

  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    margin-top: 30px;
  }

  @media ${({ theme }) => theme.media.mobile1} {
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 350px;
  position: relative;
  display: flex !important;
  justify-content: center;

  img {
    width: 100%;
    max-width: 768px;
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

  @media ${({ theme }) => theme.media.tablet} {
    height: 300px;

    img {
      height: 300px;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    height: 200px;

    img {
      height: 200px;
    }
  }

  @media ${({ theme }) => theme.media.mobile1} {
    height: 150px;

    img {
      height: 150px;
    }
  }
`;
