import styled from 'styled-components';

export const DefaultInnerContainer = styled.div`
  width: 1250px;
  padding: 15px 0;
  display: flex;
  margin: 0 30px;

  @media ${({ theme }) => theme.media.desktop} {
    width: 100%;
  }
`;

export const HeaderInnerContainer = styled(DefaultInnerContainer)`
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
