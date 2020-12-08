import styled from 'styled-components'
import logo from '../../assets/images/github.svg'


export const Wrapper = styled.div`
  width: 100%;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 0 ${({ theme }) => theme.spacing.xl}px;
`

export const Logo = styled.div`
  display: flex;
  
  & div {
    // Thanks it I can easy change fill color
    background-color: ${({ theme }) => theme.colors.text};
    mask: url(${logo}) no-repeat center;
    width: 60px;
    height: 60px;
  }
  
  & h1 {
    font-family: Arial,serif;
    color: ${({ theme }) => theme.colors.text};
  }
`;
