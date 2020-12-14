import React, {useEffect, useState} from 'react';
import request from "../../helpers/request";


import {ArrowBackIcon, GitRepositoryIcon, GoBack, RepoInfo, Wrapper} from "./CommitsTimeline.css";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import Timeline from "../../components/Timeline/Timeline";


const CommitsTimeline = ({match}) => {
    const repo = match.params.repo;
    const username = match.params.user;

    // const [userInfo, setUserInfo] = useState({});
    const [allCommits, setAllCommits] = useState(0);

    // Working bad, to fix!
    useEffect(() => {
        // Get number of commits
        request.get(`/repos/${username}/${repo}/stats/contributors`)
            .then((response) => {
                if (response.status !== 202) {
                    setAllCommits(response.data[0].total)
                } else {
                    // Try again (I think it's bug in api);
                    request.get(`/repos/${username}/${repo}/stats/contributors`)
                        .then((response) => {
                            if (response.status !== 202)
                                setAllCommits(response.data[0].total)
                        })
                }
            })
            .catch()
    }, [repo, username])



    return (
        <Wrapper>
            <RepoInfo>
                <h1>
                    <GitRepositoryIcon />
                    <Link to={`/user/${username}`}>{username}</Link> / {repo}
                </h1>
                <p>Commits: <strong>{allCommits}</strong></p>
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
