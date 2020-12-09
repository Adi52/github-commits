import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80vh;
`;


export const Buttons = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
