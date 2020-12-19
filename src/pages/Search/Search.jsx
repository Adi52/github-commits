import React, {useEffect} from 'react';

import {Container} from './Search.css';
import Titles from "../../components/Titles/Titles";
import InputSearch from "../../components/InputSearch/InputSearch";
import Footer from "../../components/Footer/Footer";

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
            {/*<Footer />*/}
        </Container>
    )
}

export default Search;