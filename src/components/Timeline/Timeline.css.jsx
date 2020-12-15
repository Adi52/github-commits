import styled, {keyframes} from 'styled-components';

// Icons
import {GitCommit} from "@styled-icons/ionicons-solid/GitCommit";
import {MarkGithub as GithubI} from "@styled-icons/octicons/MarkGithub";
import {RepoTemplate} from "@styled-icons/octicons/RepoTemplate";
import {Spinner2} from "@styled-icons/icomoon/Spinner2";

// Keyframes
const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.section`
  width: 100%;

  p {
    color: ${({theme}) => theme.colors.textSecondary};
    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.textSecondary};
        &:hover {
          text-decoration: underline;
      }
    }
  }

  .vertical-timeline::before {
    // Custom css for timeline
    background: ${({theme}) => theme.colors.border};
  }
  .vertical-timeline-element-date {
    color: ${({theme}) => theme.colors.text}
  }
  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 3px ${({theme}) => theme.colors.contrast};
  }
`


// Icons
export const CommitIcon = styled(GitCommit)`
    color: ${({theme}) => theme.colors.contrast}
`;


export const GithubIcon = styled(GithubI)`
  width: 1rem;
  transform: translateY(-1px);
  margin-left: ${({theme}) => theme.spacing.xs / 2}px;
  color: ${({theme}) => theme.colors.textSecondary}
`
export const StartRepoIcon = styled(RepoTemplate)`
  color: ${({theme}) => theme.colors.contrast}
`

export const LoadingIcon = styled(Spinner2)`
  color: ${({theme}) => theme.colors.contrast};
  animation: 0.8s linear ${rotate} infinite;
`


