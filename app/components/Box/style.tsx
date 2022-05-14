import styled from 'styled-components';

export const BoxWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: ${({ theme }) => `2px solid ${theme.colors.main}`};
  border-radius: 6px;
  box-shadow: 1px 1px 5px #bdbdbd;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.main};
  }

  @media ${({ theme }) => theme.media.mobile2} {
    h3 {
      font-size: 1.15rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
