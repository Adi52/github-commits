import React, {useEffect} from 'react';
import InputSearch from "../../components/InputSearch/InputSearch";
import {Container} from './Search.css';
import Titles from "../../components/Titles/Titles";


const Search = () => {

    useEffect(() => {
        document.title = 'githubCommits';
    }, [])


    return (
        <Container>
            <Titles
                h1={"Enter the username from Github"}
                h2={"And view all user commits as timeline"}
            />
            <InputSearch />
        </Container>
    )
}

export default Search;