import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: ${({theme}) => theme.spacing.xl*2}px;
    
    @media (${({ theme }) => theme.device.laptopL}) {
       padding: ${({theme}) => theme.spacing.xl}px;                     
    }  
    
    @media (${({ theme }) => theme.device.mobileM}) {
      padding: ${({theme}) => theme.spacing.xl}px;
    }
    
    & h1 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 3rem;
        font-family: ${({ theme }) => theme.fonts.first};
        
        @media (${({ theme }) => theme.device.mobileL}) {
            font-size: 2.2rem;  
        }  
        
        @media (${({ theme }) => theme.device.mobileM}) {
          font-size: 1.9rem;
        }
    }
    
    & h2 {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 2rem;
        font-family: ${({ theme }) => theme.fonts.first};
        font-weight: lighter;

        @media (${({ theme }) => theme.device.mobileL}) {
            font-size: 1.7rem;  
        } 
        
        @media (${({ theme }) => theme.device.mobileM}) {
          font-size: 1.3rem;
        }
    }
`;