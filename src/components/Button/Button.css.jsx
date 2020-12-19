import styled from 'styled-components';



import Button from '@material-ui/core/Button';

export const RootButton = styled(Button)`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
    border-radius: ${({theme}) => theme.spacing.xs / 2}px !important;
    color: ${({theme}) => theme.colors.text} !important;
    margin: 0 ${({theme}) => theme.spacing.xs}px !important;
    padding: ${({theme}) => theme.spacing.xs/3}px ${({theme}) => theme.spacing.xl}px !important;
    font-weight: bold !important;
    min-width: 150px !important;
    font-family: ${({theme}) => theme.fonts.first} !important;
    font-size: 1rem !important;
    border: 2px solid ${({theme}) => theme.colors.lightenContrast} !important;
    text-decoration: none !important;
    
    @media (${({ theme }) => theme.device.mobileS}) {
        padding: ${({theme}) => theme.spacing.xs/3}px ${({theme}) => theme.spacing.sm}px !important;
        min-width: 120px !important;
        width: 120px !important;
    }
`


export const PrimaryButton = styled(RootButton)`
    background-color: ${({theme}) => theme.colors.lightenContrast} !important;
  
    &:hover {
        background-color: ${({theme}) => theme.colors.contrast} !important;
        border-color: ${({theme}) => theme.colors.contrast} !important;
    }

`;

export const RegularButton = styled(RootButton)`
    background-color: transparent !important;
    color: ${({theme}) => theme.colors.textSecondary} !important; 

    &:hover {
        background-color: rgba(0, 0, 0, 0.2) !important;
        border-color: ${({theme}) => theme.colors.contrast} !important;
    }

`;