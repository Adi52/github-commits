import styled from 'styled-components';

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
    
    @media (${({ theme }) => theme.device.mobileM}) {
        padding: ${({theme}) => theme.spacing.xs}px ${({theme}) => theme.spacing.sm}px; 
        min-width: 120px;
        width: 120px;
    }
    
    &:hover {
      cursor: pointer;
    }
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
        border-color: ${({theme}) => theme.colors.lightenContrast};
        box-shadow: inset ${({theme}) => theme.spacing.xl * 5}px 0 0 0 ${({theme}) => theme.colors.lightenContrast};
    }
`;