import styled from 'styled-components'

export const Input = styled.input`
    width: 70%;
    max-width: 400px;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.foreground};
    border: none;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    padding: 0 40px;
    box-shadow: ${({ theme }) => theme.defaultShadow};
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