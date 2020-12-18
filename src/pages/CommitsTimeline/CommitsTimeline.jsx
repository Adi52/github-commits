import React, {useEffect, useState} from 'react';

import {GitRepositoryIcon, RepoInfo, Wrapper} from "./CommitsTimeline.css";
import {Link} from "react-router-dom";
import Timeline from "../../components/Timeline/Timeline";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import ErrorPage from "../ErrorPage/ErrorPage";

const CommitsTimeline = ({match}) => {

    const [displayPage, setDisplayPage] = useState(true);

    const repo = match.params.repo;
    const username = match.params.user;

    useEffect(() => {
        document.title = `${username}/${repo}`;
    }, [username, repo])

    return displayPage ? (
        <Wrapper>
            <RepoInfo>
                <h1>
                    <GitRepositoryIcon />
                    <Link to={`/user/${username}`}>{capitalizeFirstLetter(username)}</Link> / {repo}
                </h1>
            </RepoInfo>
            <Timeline
                repo={repo}
                username={username}
                setDisplayPage={setDisplayPage}
            />
        </Wrapper>
    ) : (<ErrorPage variant={'repo'} repo={repo}/>)
};

export default CommitsTimeline;
