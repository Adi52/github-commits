import React from 'react';

import {Container, Logo, Wrapper} from './LogoWrapper.css'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {useHistory} from 'react-router-dom';

const LogoWrapper = () => {
    const history = useHistory();

    return (
        <Wrapper>
            <Container>
                <Logo onClick={() => history.push('/')}>
                    <div></div>
                    <h1>githubCommits</h1>
                </Logo>
                <ThemeSwitcher />
            </Container>
        </Wrapper>
    )
}


export default LogoWrapper;