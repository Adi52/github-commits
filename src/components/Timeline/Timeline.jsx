import React, {useEffect, useState} from 'react';

import InfiniteScroll from "react-infinite-scroll-component";
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

    const commitsDisplay = commits && commits.map(commit => <div key={commit.sha} style={{height: 40}}>{commit.commit.message}</div>)


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
                {commitsDisplay}
            </InfiniteScroll>
        </>
    );
};

export default Timeline;