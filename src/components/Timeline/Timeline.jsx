import React, {useEffect, useState} from 'react';

import InfiniteScroll from "react-infinite-scroll-component";

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import request from "../../helpers/request";


const Timeline = ({username, repo}) => {

    const [page, setPage] = useState(1);

    const [commits, setCommits] = useState([]);
    const [loadMore, setLoadMore] = useState(true);


    useEffect(() => {
        request.get(`/repos/${username}/${repo}/commits?per_page=10&page=${page}`)
            .then((response) => {
                setCommits([...commits, ...response.data]);
                if (response.data.length === 0) {
                    setLoadMore(false);
                }
            })
            .catch()
    }, [page])

    // const commitsDisplay = commits && commits.map(commit => (
    //     <div key={commit.node_id} style={{padding: 20}}>
    //         <p>{commit.commit.message}</p>
    //         <p>{commit.commit.committer.name}</p>
    //         <p>{commit.commit.committer.date.split("T")[0]}</p>
    //         <a href={commit.html_url} target={"_blank"}>link</a>
    //     </div>
    //     )
    // )

    const commitsDisplay = commits && commits.map(commit => (
            <VerticalTimelineElement
                key={commit.node_id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(243,14,32)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243,14,32)' }}
                date={commit.commit.committer.date.split("T")[0]}
                iconStyle={{ background: 'rgb(243,14,32)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">{commit.commit.committer.name}</h3>
                <p>{commit.commit.message}</p>
                <p>See at </p>
                <a href={commit.html_url} target={"_blank"}>github</a>
            </VerticalTimelineElement>
        )
    )

    return (
        <>
            <InfiniteScroll
                dataLength={commits.length}
                next={() => setPage(page + 1)}
                hasMore={loadMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <VerticalTimeline>
                    {commitsDisplay}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </InfiniteScroll>
        </>
    );
};

export default Timeline;