import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Description, Language, LanguageColor, RepositoryIcon, Tile, Title} from "./UserRepo.css";

import githubLanguageColor from "../../../../utils/githubLanguageColor";



const UserRepoTile = ({repo}) => {

    const {name, description, language} = repo;
    const location = useLocation();

    const languageColor = githubLanguageColor(language);

    return (
        <Tile>

            <Title>
                <RepositoryIcon/>
                <Link to={`${location.pathname}/${name}`}>{name}</Link>
            </Title>

            <Description>
                {description}
            </Description>

            <Language>
                <LanguageColor color={languageColor} />
                <p>{language}</p>
            </Language>
        </Tile>
    );
};

export default UserRepoTile;