import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.xl}px;
`;


export const UserImage = styled.div`
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: ${({ theme }) => theme.spacing.xl*5}px;
    height: ${({ theme }) => theme.spacing.xl*5}px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.main};
    
    img {
        width: ${({ theme }) => theme.spacing.xl*5}px;
        height: ${({ theme }) => theme.spacing.xl*5}px;
        display: ${props => props.loaded ? "block" : "none"};
    }
`;

export const UserName = styled.a`
    color: ${({ theme }) => theme.colors.contrast};
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: ${({ theme }) => theme.spacing.sm}px;
    font-weight: bold;
`;


export const UserNick = styled(UserName)`
    font-weight: normal;
    font-size: 1.2rem;
    
    :hover {
        text-decoration: underline;
    }
`;