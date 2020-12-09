import React from 'react';
import InputSearch from "../../components/InputSearch/InputSearch";
import {Buttons, Container} from './Search.css';
import Button from "../../components/Button/Button";
import Titles from "../../components/Titles/Titles";

const Search = () => {

    return (
        <Container>
            <Titles
                h1={"Enter the username from Github"}
                h2={"And view all user commits as timeline"}
            />
            <InputSearch />
            <Buttons>
                <Button variant={"regular"}>
                    Example
                </Button>
                <Button variant={"primary"}>
                    Search
                </Button>
            </Buttons>
        </Container>
    )
}

export default Search;