import styled from 'styled-components'


export const Input = styled.div`
    width: 70%;
    max-width: 400px;

    & input {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.foreground};
      width: 100%;
      border: none;
      height: 50px;
      border-radius: 25px;
      padding: 0 40px;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
      outline: none;
    }
`;
