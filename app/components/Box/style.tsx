import styled from 'styled-components';

export const BoxWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: ${({ theme }) => `2px solid ${theme.colors.main}`};
  border-radius: 6px;
  box-shadow: 1px 1px 5px #bdbdbd;
  background-color: #fff;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.main};
  }

  p {
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 15px;
    h3 {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const BoxEmploymentWrapper = styled.div`
  width: 100%;

  h1 {
    font-size: 2rem;
  }
`;
