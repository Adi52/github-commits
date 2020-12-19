import React, {useEffect, useRef, useState} from 'react';

import {GitRepositoryIcon, RepoInfo, Wrapper} from "./CommitsTimeline.css";
import {Link} from "react-router-dom";
import Timeline from "../../components/Timeline/Timeline";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import ErrorPage from "../ErrorPage/ErrorPage";
import {gsap} from "gsap";

const CommitsTimeline = ({match}) => {

    const [displayPage, setDisplayPage] = useState(true);

    const repo = match.params.repo;
    const username = match.params.user;

    useEffect(() => {
        document.title = `${username}/${repo}`;
    }, [username, repo])

    let repoInfo = useRef(null);
    let timeline = useRef(null);


    useEffect(() => {
        gsap.from([repoInfo, timeline], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            opacity: 0,
            y: 40,

            stagger: {
                amount: 0.15
            }
        })
    }, []);

    return displayPage ? (
        <Wrapper>
            <RepoInfo>
                <h1 ref={el => (repoInfo = el)}>
                    <GitRepositoryIcon />
                    <Link to={`/user/${username}`}>{capitalizeFirstLetter(username)}</Link> / {repo}
                </h1>
            </RepoInfo>

            <div ref={el => (timeline = el)} style={{width: '100%'}}>
                <Timeline
                    repo={repo}
                    username={username}
                    setDisplayPage={setDisplayPage}
                />
            </div>

        </Wrapper>
    ) : (<ErrorPage variant={'repo'} repo={repo}/>)
};

export default CommitsTimeline;
