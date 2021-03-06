import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: ${({ theme }) => theme.minSectionHeight};
    
    @media (${({ theme }) => theme.device.mobileM}) {
          min-height: calc(${({ theme }) => theme.minSectionHeight} - 50px);
    }    
`;