import React from 'react';

import {Container, Logo, Wrapper} from './LogoWrapper.css'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


const LogoWrapper = () => {

    return (
        <Wrapper>
            <Container>
                <Logo>
                    <div></div>
                    <h1>Github commits</h1>
                </Logo>
                <ThemeSwitcher />
            </Container>
        </Wrapper>
    )
}


export default LogoWrapper;