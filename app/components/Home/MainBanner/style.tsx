import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainBannerWrapper = styled.section`
  width: 100%;
  padding: 115px 0 60px 0;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 100px 0 50px 0;
  }

  @media ${({ theme }) => theme.media.mobile1} {
    padding: 100px 0 30px 0;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  flex-direction: column;
`;

export const BannerTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.media.mobile1} {
    h1 {
      font-size: 1.75rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  svg {
    width: 30px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    margin-top: 40px;
    svg {
      width: 20px;
    }
  }
  @media ${({ theme }) => theme.media.mobile1} {
    margin-top: 30px;
    svg {
      width: 15px;
    }
  }
`;
