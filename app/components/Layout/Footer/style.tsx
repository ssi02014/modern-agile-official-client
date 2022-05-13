import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #dbdbdb;

  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 15px;
    }
  }
`;
