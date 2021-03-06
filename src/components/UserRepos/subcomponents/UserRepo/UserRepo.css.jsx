import styled from 'styled-components'

import {GitRepository} from "@styled-icons/remix-line/GitRepository";


export const Tile = styled.div`
    flex-basis: 49%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    border-radius: ${({ theme }) => theme.spacing.xs/1.5}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: ${({ theme }) => theme.spacing.sm}px;
    margin-top: 2%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    min-height: 120px;
    
    @media (${({ theme }) => theme.device.tablet}) {
        max-width: 49%;
    }  
    
    @media (${({ theme }) => theme.device.mobileL}) {
        flex-basis: 96%;
        max-width: 96%;
        margin-left: auto;
        margin-right: auto;
    }  
    
`;

export const RepositoryIcon = styled(GitRepository)`
    width: 20px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    a {
        margin-left: ${({ theme }) => theme.spacing.xs}px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
        word-break: break-all;
        
        :hover {
        text-decoration: underline;
        }
    }
`;


export const Description = styled.p`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: normal !important;
    margin: ${({ theme }) => theme.spacing.xs}px 0;
    word-break: break-all;
`;

export const Language = styled.div`
    margin-top: auto; // TRICK! thanks it i can position it at bottom :D
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
    
    p {
        transform: translateY(0.05rem);
        color: ${({ theme }) => theme.colors.textSecondary};
        font-weight: normal !important;
    }

`;

export const LanguageColor = styled.div`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background-color: ${props => props.color};
    margin-right: ${({ theme }) => theme.spacing.xs/2}px;
`
