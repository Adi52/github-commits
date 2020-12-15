import React, {useEffect} from 'react';
import {Wrapper} from "./ErrorPage.css";
import Button from "../../components/Button/Button";


const ErrorPage = () => {

    useEffect(() => {
        document.title = 'Page not found - githubCommits';
    }, [])


    return (
        <Wrapper>
            <h1>404</h1>
            <h3>Page not found!</h3>
            <Button to={"/"} variant={"primary"}>Go home</Button>
        </Wrapper>
    );
};

export default ErrorPage;