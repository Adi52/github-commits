import styled from 'styled-components'
import {darken} from 'polished'

export const Wrapper = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xs}px;
    width: 70%;
    max-width: 400px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.spacing.xs}px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
    outline: none;
    
    ul {
      list-style: none;
      padding: 0;
      
      & li {
        cursor: pointer;
        padding: ${({ theme }) => theme.spacing.xs}px 40px;
        color: ${({ theme }) => theme.colors.foreground};
        overflow: hidden;
        
        &:hover {
          background-color: ${({ theme }) => darken(0.05, theme.colors.text)};
        }
      }
    }   
`;
