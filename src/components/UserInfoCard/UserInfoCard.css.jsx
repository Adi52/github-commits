import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;


export const UserImage = styled.img`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.contrast};
  width: ${({ theme }) => theme.spacing.xl*4}px
`;


export const UserNick = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  
  :hover {
    text-decoration: underline;
  }
    
`;