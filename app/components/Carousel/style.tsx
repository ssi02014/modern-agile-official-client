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
