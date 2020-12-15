import React, {useEffect, useState} from 'react';
import request from "../../helpers/request";


import {ArrowBackIcon, GitRepositoryIcon, GoBack, RepoInfo, Wrapper} from "./CommitsTimeline.css";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import Timeline from "../../components/Timeline/Timeline";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";


const CommitsTimeline = ({match}) => {
    const repo = match.params.repo;
    const username = match.params.user;

    useEffect(() => {
        document.title = `${username}/${repo}`;
    }, [username, repo])

    return (
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
            />


        </Wrapper>
    );
};


export default CommitsTimeline;




// useEffect(() => {
//     // Get user info (to UserInfoCard)
//     request.get(`/users/${username}`)
//         .then((response) => {
//             if (response && response.status === 404) {
//                 console.clear();
//             } else {
//                 setUserInfo(response.data);
//             }
//         })
//         .catch()
// }, [username]);
