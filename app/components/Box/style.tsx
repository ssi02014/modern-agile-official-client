import styled from 'styled-components';

export const BoxWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: ${({ theme }) => `2px solid ${theme.colors.main}`};
  border-radius: 6px;
  box-shadow: 1px 1px 5px #bdbdbd;
  background-color: #fff;
`;

export const BoxEmploymentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 80%;
  }

  h1 {
    font-size: 2rem;
  }

  a {
    cursor: pointer;
    font-size: 1.25rem;
    display: inline;
    color: #fff;
    font-weight: bold;
  }
`;
