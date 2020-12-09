import styled from 'styled-components'

export const Container = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
    
  & h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fonts.first};
  }
  
  & h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.first};
    font-weight: lighter;
  }
`;