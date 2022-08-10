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
  position: relative;
  border-radius: 9px;
  overflow: hidden;

  picture {
    width: 100%;
    border-radius: 9px;

    img {
      width: 100%;
      height: 400px;
      max-width: 768px;
      object-fit: cover;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.35;
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
