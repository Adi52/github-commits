import React, {useContext, useEffect, useState} from 'react';

import request from "../../helpers/request";

import InfiniteScroll from "react-infinite-scroll-component";
import moment from 'moment'
// import 'moment/locale/en'
import 'moment/locale/pl'
import 'moment/locale/en-gb'

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


// Styles
import {CommitIcon, GithubIcon, LoadingIcon, StartRepoIcon, Wrapper} from "./Timeline.css";
import { ThemeContext } from 'styled-components';


// Here u can change language in future
// pl / en-gb
moment.locale('');


const Timeline = ({username, repo, setDisplayPage}) => {
    // Use theme from ThemeProvider without styled component
    const themeContext = useContext(ThemeContext);
    const [page, setPage] = useState(1);
    const [commits, setCommits] = useState([]);
    const [loadMore, setLoadMore] = useState(true);

    useEffect(() => {
        request.get(`/repos/${username}/${repo}/commits?per_page=6&page=${page}`)
            .then((response) => {
                if (response && response.status === 404) {
                    setDisplayPage(false);
                } else {
                    setCommits([...commits, ...response.data]);
                    if (response.data.length === 0) {
                        setLoadMore(false);
                    }
                }
            })
            .catch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const commitsDisplay = commits && commits.map(({commit, html_url, sha}) => (
            <VerticalTimelineElement
                key={sha}
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
                date={moment(commit.committer.date).format('MMMM Do YYYY, h:mm:ss a')}
                iconStyle={
                    {
                        background: `${themeContext.colors.secondary}`,
                    }
                }
                icon={<CommitIcon />}
            >
                <h3 className="vertical-timeline-element-title">{commit.committer.name}</h3>
                <p style={
                    {
                        textAlign: 'justify',
                        color: `${themeContext.colors.textSecondary}`,
                        overflow: 'hidden',
                    }
                }
                >
                    {commit.message}
                </p>
                <p>
                    <a href={html_url} target={"_blank"} rel={"noopener noreferrer"}>
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
                loader={<h4> </h4>}
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
    )
};

export default Timeline;