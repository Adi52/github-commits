import styled from 'styled-components'

export const Input = styled.input`
    width: 70%;
    max-width: 400px;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.foreground};
    border: none;
    height: 50px;
    border-radius: 25px;
    padding: 0 40px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
    outline: none;
`;


export const Buttons = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;