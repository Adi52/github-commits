import React, {useContext, useEffect, useState} from 'react';

import request from "../../helpers/request";

import InfiniteScroll from "react-infinite-scroll-component";

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



// Styles
import {CommitIcon, GithubIcon, LoadingIcon, StartRepoIcon, Wrapper} from "./Timeline.css";
import { ThemeContext } from 'styled-components';



const Timeline = ({username, repo}) => {
    // Use theme from ThemeProvider without styled component
    const themeContext = useContext(ThemeContext);

    const [page, setPage] = useState(1);

    const [commits, setCommits] = useState([]);
    const [loadMore, setLoadMore] = useState(true);


    useEffect(() => {
        request.get(`/repos/${username}/${repo}/commits?per_page=6&page=${page}`)
            .then((response) => {
                setCommits([...commits, ...response.data]);
                if (response.data.length === 0) {
                    setLoadMore(false);
                }
            })
            .catch()
    }, [page])


    const commitsDisplay = commits && commits.map(commit => (
            <VerticalTimelineElement
                key={commit.sha}
                className="vertical-timeline-element--work"
                contentStyle={
                    {
                        borderRadius: `${themeContext.spacing.xs/1.5}px`,
                        background: `${themeContext.colors.secondary}`,
                        color: `${themeContext.colors.text}`,
                        border: `0.5px solid ${themeContext.colors.border}`,
                        boxShadow: `inset 0 0 0 0.5px ${themeContext.colors.border}`,
                        // boxShadow: 'none',

                    }
                }
                contentArrowStyle={{borderRight: `7px solid ${themeContext.colors.border}`}}
                date={commit.commit.committer.date.split("T")[0]}
                iconStyle={
                    {
                        background: `${themeContext.colors.secondary}`,
                    }}
                icon={<CommitIcon />}
            >
                <h3 className="vertical-timeline-element-title">{commit.commit.committer.name}</h3>

                <p style={
                    {
                        textAlign: 'justify',
                        color: `${themeContext.colors.textSecondary}`,
                        overflow: 'hidden',
                    }
                }
                >
                    {commit.commit.message}
                </p>

                <p>
                    <a href={commit.html_url} target={"_blank"}>
                        See at github<GithubIcon/>
                    </a>
                </p>
            </VerticalTimelineElement>
        )
    )

    return (
        <Wrapper>
            <InfiniteScroll
                dataLength={commits.length}
                next={() => setPage(page + 1)}
                hasMore={loadMore}
                loader={<h4></h4>}
            >
                <VerticalTimeline>
                    {commitsDisplay}
                    <VerticalTimelineElement
                        iconStyle={{background: `${themeContext.colors.secondary}`}}
                        icon={loadMore ? <LoadingIcon/> : <StartRepoIcon />}
                    />
                </VerticalTimeline>
            </InfiniteScroll>
        </Wrapper>
    );
};

export default Timeline;