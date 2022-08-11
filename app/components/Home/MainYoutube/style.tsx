import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainYoutubeWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  flex-direction: column;
  padding: 0;
`;

export const ContentsContainer = styled.div`
  /* display: flex; */
  margin-top: 50px;
  gap: 20px;

  @media ${({ theme }) => theme.media.mobile2} {
    flex-direction: column;
  }
`;

export const IframeContainer = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 500px;
    border-radius: 4px;
    box-shadow: 1px 1px 10px #bdbdbd;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    iframe {
      height: 300px;
    }
  }
`;

export const YoutubeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;

  @media ${({ theme }) => theme.media.mobile2} {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;

    & > div {
      width: 47.5%;
    }

    div + div {
      margin-top: 0;
    }
  }
`;

export const YoutubeItemContainer = styled.div`
  box-shadow: 1px 1px 3px #bdbdbd;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
  }

  h5,
  p {
    padding: 0 5px;
    text-align: center;
  }

  h5 {
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin: 5px 0;
    min-height: 40px;
  }

  p {
    font-size: 0.7rem;
    color: #aaaaaa;
    margin-bottom: 5px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &:hover {
    transform: scale(1.01);
  }

  img:hover {
    filter: brightness(0.85);
  }

  @media ${({ theme }) => theme.media.mobile2} {
    width: 48%;
  }
`;
