import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #3b3b3b;

  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 35px;
    }
  }

  li {
    font-size: 1rem;
    font-weight: bold;
  }

  a {
    color: #fff;

    &:hover {
      color: #d1d1d1;
    }
  }

  svg {
    cursor: pointer;
    display: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    ul {
      display: none;
    }
    svg {
      display: block;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;
