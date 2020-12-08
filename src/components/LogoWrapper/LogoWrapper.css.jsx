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
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  user-select: none;
  cursor: pointer;
  
  & div {
    // Thanks it I can easy change fill color
    background-color: ${({ theme }) => theme.colors.text};
    mask: url(${logo}) no-repeat center;
    width: 50px;
    height: 50px;
    margin-right: ${({ theme }) => theme.spacing.sm}px;
  }
  
  & h1 {
    font-family: ${({ theme }) => theme.fonts.logo};
    color: ${({ theme }) => theme.colors.text};
  }
`;
