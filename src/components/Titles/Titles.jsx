import React from 'react';
import {Container} from "./Titles.css";

const Titles = ({h1, h2}) => {
    return (
        <Container>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
        </Container>
    );
};

export default Titles;