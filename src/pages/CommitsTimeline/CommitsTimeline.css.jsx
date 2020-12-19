import styled from 'styled-components';

// icons
import {GitRepository} from "@styled-icons/remix-line/GitRepository";


export const GitRepositoryIcon = styled(GitRepository)`
    width: ${({theme}) => theme.spacing.xl}px;
    margin-right: ${({theme}) => theme.spacing.xs}px;
`;
// end icons


export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: ${({theme}) => theme.minSectionHeight};
`

export const RepoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.contrast};
    padding-top: ${({theme}) => theme.spacing.sm}px;
    word-wrap: break-word;

    @media (${({ theme }) => theme.device.mobileL}) {
        text-align: center;
        padding: ${({theme}) => theme.spacing.xs}px;
    }  
    
    
    a {
        color: ${({theme}) => theme.colors.contrast};
        text-decoration: none;
        
        :hover {
            text-decoration: underline;
        }
    }
    
    h1 {
        font-size: 1.5rem;
    }
    
    p {
        font-size: 1rem;
        color: ${({theme}) => theme.colors.text};
        margin-block-start: 0;
    }
`;

