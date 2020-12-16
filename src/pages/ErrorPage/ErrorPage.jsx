import React, {useEffect} from 'react';
import {Wrapper} from "./ErrorPage.css";
import Button from "../../components/Button/Button";


const ErrorPage = (props) => {

    useEffect(() => {
        document.title = 'Page not found - githubCommits';
    }, [])

    let message = 'Page not found!';

    switch(props.variant) {
        case "user": {
            message = <h3>User <strong>{props.username}</strong> not found</h3>;
            break;
        }
        case "repo": {
            message = `Repository ${props.repo} not found!`;
            break;
        }

        default: {
            message = 'Page not found!';
            break;
        }
    }

    return (
        <Wrapper>
            <h1>404</h1>
            {message}
            <Button to={"/"} variant={"primary"}>Go home</Button>
        </Wrapper>
    );
};

export default ErrorPage;