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
            message = <>User <strong>{props.username}</strong> not found</>;
            break;
        }
        case "repo": {
            message = <>Repository <strong>{props.repo}</strong> not found!</>;
            break;
        }

        default: {
            break;
        }
    }

    return (
        <Wrapper>
            <h1>404</h1>
            <h3>{message}</h3>
            <Button to={"/"} variant={"primary"}>Go home</Button>
        </Wrapper>
    );
};

export default ErrorPage;