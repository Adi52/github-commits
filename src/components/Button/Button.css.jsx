import styled from 'styled-components';
import {lighten} from 'polished'

const RootButton = styled.button`
  background: none;
  border: 2px solid ${({theme}) => theme.colors.contrast};
  font: inherit;
  line-height: 1;
  margin: ${({theme}) => theme.spacing.xs}px;
  padding: ${({theme}) => theme.spacing.xs}px ${({theme}) => theme.spacing.xl}px; 
  border-radius: ${({theme}) => theme.spacing.xs / 2}px;
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
  min-width: 150px;
`

export const RegularButton = styled(RootButton)`
    color: ${({theme}) => theme.colors.contrast};
    transition: 0.4s;
    
    &:hover,
    &:focus { 
        color: ${({theme}) => theme.colors.foreground};
        box-shadow: inset ${({theme}) => theme.spacing.xl * 5}px 0 0 0 ${({theme}) => theme.colors.contrast};
`;


export const PrimaryButton = styled(RootButton)`
    background-color: ${({theme}) => theme.colors.contrast};
    color: ${({theme}) => theme.colors.foreground};
    transition: 0.4s;
    
    &:hover,
    &:focus {
      border-color: ${({theme}) => lighten(0.04, theme.colors.contrast)};
      box-shadow: inset ${({theme}) => theme.spacing.xl * 5}px 0 0 0 ${({theme}) => lighten(0.04, theme.colors.contrast)};
    }
`;