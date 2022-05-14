import { DefaultInnerContainer } from 'components/InnerContainer/style';
import styled from 'styled-components';

export const MainEmploymentWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 9px;
  padding: 40px;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;

  h1 {
    font-size: 2.5rem;
  }

  div + div {
    margin-top: 20px;
  }
`;
