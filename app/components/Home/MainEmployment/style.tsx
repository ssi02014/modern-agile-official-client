import { DefaultInnerContainer } from 'components/InnerContainer/style';
import styled from 'styled-components';

export const MainEmploymentWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 50px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding-bottom: 50px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 9px;
  padding: 40px;
  margin: 0;

  & > a {
    display: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;

    & > a {
      display: block;
    }

    article + article {
      margin: 30px 0;
    }
  }
`;

export const ContentsContainer = styled.article`
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 2.35rem;
  }

  div + div {
    margin-top: 20px;
  }

  &:first-child {
    padding: 0 60px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    &:first-child {
      padding: 0 30px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    &:first-child {
      padding: 0;
    }

    h1 {
      font-size: 1.75rem;
      /* text-align: center; */
    }

    a {
      display: none;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
