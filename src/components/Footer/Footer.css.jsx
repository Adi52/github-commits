import styled from "styled-components";

// icons
import {MarkGithub as GithubI} from "@styled-icons/octicons/MarkGithub";
import {Copyright as CopyrightI} from "@styled-icons/boxicons-regular/Copyright";
import {Mail as MailI} from "@styled-icons/entypo/Mail";
import {Location as LocationI} from "@styled-icons/entypo/Location";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    height: 7vh;
    min-height: 50px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
`;


export const CopyrightIcon = styled(CopyrightI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
`;

export const Copyright = styled.div`
    display: flex;
`;

export const GithubIcon = styled(GithubI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
`;

export const Github = styled.a`
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    :hover {
        text-decoration: underline;
    }
`;

export const MailIcon = styled(MailI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
`;

export const Mail = styled.a`
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    :hover {
        text-decoration: underline;
    }
`;

export const LocalizationIcon = styled(LocationI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
`;

export const Localization = styled.div`
    display: flex;
    align-items: center;
`;