import styled from "styled-components";

// icons
import {MarkGithub as GithubI} from "@styled-icons/octicons/MarkGithub";
import {Copyright as CopyrightI} from "@styled-icons/boxicons-regular/Copyright";
import {Mail as MailI} from "@styled-icons/entypo/Mail";
import {Location as LocationI} from "@styled-icons/entypo/Location";


export const Wrapper = styled.div`
    
    position: fixed;
    bottom: 0;
    width: 100%;

    

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};

    
    @media (${({ theme }) => theme.device.laptopL}) {
        font-size: 1rem;
    }
    
    @media (${({ theme }) => theme.device.mobileL}) {
        flex-wrap: wrap;
        max-height: 100px;
        //justify-content: center;

    }
    
    @media (${({ theme }) => theme.device.mobileM}) {
        flex-wrap: wrap;
        max-height: 100px;
    }
`;


export const CopyrightIcon = styled(CopyrightI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
    
    @media (${({ theme }) => theme.device.laptopL}) {
        width: ${({ theme }) => theme.spacing.sm}px;
    }
`;

export const Copyright = styled.div`
    display: flex;
    
    @media (${({ theme }) => theme.device.mobileL}) {
        flex-basis: 50%;
        justify-content: center;
    }
    
    @media (${({ theme }) => theme.device.mobileM}) {
        flex-basis: 50%;
        justify-content: center;
        margin-top: ${({ theme }) => theme.spacing.xs/2}px;
    }
`;

export const GithubIcon = styled(GithubI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
    
    @media (${({ theme }) => theme.device.laptopL}) {
        width: ${({ theme }) => theme.spacing.sm}px;
    }
`;

export const Github = styled.a`
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    :hover {
        text-decoration: underline;
    }
        
    @media (${({ theme }) => theme.device.mobileL}) {
        flex-basis: 50%;
        justify-content: center;
    }
    
    @media (${({ theme }) => theme.device.mobileM}) {
        flex-basis: 50%;
        justify-content: center;
        margin-top: ${({ theme }) => theme.spacing.xs/2}px;
    }
`;

export const MailIcon = styled(MailI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
    
    @media (${({ theme }) => theme.device.laptopL}) {
        width: ${({ theme }) => theme.spacing.sm}px;
    }
`;

export const Mail = styled.a`
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    :hover {
        text-decoration: underline;
    }
    
    @media (${({ theme }) => theme.device.mobileL}) {
        flex-basis: 50%;
        justify-content: center;
    }
    
    @media (${({ theme }) => theme.device.mobileM}) {
        flex-basis: 50%;
        justify-content: center;
        margin-top: ${({ theme }) => theme.spacing.xs/2}px;
    }
`;

export const LocalizationIcon = styled(LocationI)`
    width: ${({ theme }) => theme.spacing.sm}px;
    margin-right: ${({ theme }) => theme.spacing.sm/2}px;
    
    @media (${({ theme }) => theme.device.laptopL}) {
        width: ${({ theme }) => theme.spacing.sm}px;
    }
`;

export const Localization = styled.div`
    display: flex;
    align-items: center;
    
    @media (${({ theme }) => theme.device.mobileL}) {
        flex-basis: 50%;
        justify-content: center;
    }
    
    @media (${({ theme }) => theme.device.mobileM}) {
        display: none;
    }
`;