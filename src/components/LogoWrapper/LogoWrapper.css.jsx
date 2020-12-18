import styled from 'styled-components'
import logo from '../../assets/images/github.svg'


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 10vh;
    min-height: 55px;
    background-color: ${({ theme }) => theme.colors.foreground};
    padding: 0 ${({ theme }) => theme.spacing.xl}px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.contrast};
    
    @media (${({ theme }) => theme.device.laptopL}) {
      padding: 0 ${({ theme }) => theme.spacing.xl}px;
    }
    
    @media (${({ theme }) => theme.device.mobileS}) {
          padding: 0 ${({ theme }) => theme.spacing.xs}px;  
    }
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

        
        @media (${({ theme }) => theme.device.laptopL}) {
            width: 50px;
            height: 50px;   
            margin-right: ${({ theme }) => theme.spacing.sm}px;
        }
        
        @media (${({ theme }) => theme.device.mobileL}) {
            width: 40px;
            height: 40px;                          
        }
        
        @media (${({ theme }) => theme.device.mobileS}) {
            width: 40px;
            height: 40px;                          
        }
    
    }
    
    & h1 {
        font-family: ${({ theme }) => theme.fonts.logo};
        color: ${({ theme }) => theme.colors.text};
        
        @media (${({ theme }) => theme.device.laptopL}) {
            font-size: 2rem;                     
        }        
        
        @media (${({ theme }) => theme.device.mobileL}) {
            font-size: 1.5rem;                     
        }  
        
        @media (${({ theme }) => theme.device.mobileM}) {
            font-size: 1.5rem;
        
        }
    }
    
    
`;
