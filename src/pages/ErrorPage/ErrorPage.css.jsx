import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.text};
    padding: ${({theme}) => theme.spacing.xl*3}px;
    min-height: ${({ theme }) => theme.minSectionHeight};
    max-width: 80vw;
    overflow-wrap: anywhere;
    margin: 0 auto;
    text-align: center;
  
    @media (${({ theme }) => theme.device.mobileL}) {
        padding: ${({theme}) => theme.spacing.xl}px;
        padding-top: ${({theme}) => theme.spacing.xl*3}px;
    } 
    
    @media (${({ theme }) => theme.device.mobileM}) {
        min-height: calc(${({ theme }) => theme.minSectionHeight} - 50px);
    }

    
    h1 {
        font-size: 8rem;
        margin-block-end: 0;
        margin-block-start: 0;
        
        @media (${({ theme }) => theme.device.mobileL}) {
            font-size: 5rem;
        }  
    }

    h3 {
        font-size: 2rem;
        font-weight: normal !important;
        margin-block-end: 0;
        margin: ${({theme}) => theme.spacing.xl}px;
        
        @media (${({ theme }) => theme.device.mobileL}) {
            font-size: 1.5rem;
        }  
    }
`;