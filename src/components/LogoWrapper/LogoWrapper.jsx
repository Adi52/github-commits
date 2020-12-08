import React, {useContext} from 'react';

import {Container, Logo, Wrapper} from './LogoWrapper.css'
import logo from '../../assets/images/github.png'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


const LogoWrapper = () => {

    return (
        <Wrapper>
            <Container>
                <Logo>
                    <img src={logo} alt="Logo"/>
                    <h1>Github commits</h1>
                </Logo>
                <ThemeSwitcher />
            </Container>
        </Wrapper>
    )
}


export default LogoWrapper;