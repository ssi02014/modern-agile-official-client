import { DefaultInnerContainer } from 'components/InnerContainer/style';
import styled from 'styled-components';

export const MainValuesWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 50px 40px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  justify-content: space-around;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;

    section + section {
      margin-top: 20px;
    }
  }
`;

export const ImageContainer = styled.section`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 0 40px;
  flex: 1;
  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const ContentsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1.5;

  div + div {
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  border-radius: 50%;
  margin-bottom: 50px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    font-size: 1.5rem;
    width: 120px;
    height: 120px;
  }
`;
