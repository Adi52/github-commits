import React, {useContext, useEffect, useState} from 'react';
import {Container, LoaderContainer} from "./UserRepos.css";
import UserRepoTile from "./subcomponents/UserRepo/UserRepo";
import InfiniteScroll from "react-infinite-scroll-component";
import request from "../../helpers/request";
import {ThemeContext} from "styled-components";
import {PropagateLoader} from "react-spinners";

const fetchPerPage = 14;

const UserRepos = ({username}) => {

    const themeContext = useContext(ThemeContext);

    const [page, setPage] = useState(1);
    const [reposList, setReposList] = useState([]);
    const [loadMore, setLoadMore] = useState(true);

    useEffect(() => {
        request.get(`/users/${username}/repos?per_page=${fetchPerPage}&page=${page}`)
            .then((response) => {
                if (response && response.status === 404) {
                    console.log("Server error, try again later!")
                } else {
                    setReposList([...reposList, ...response.data]);

                    if (response.data.length < fetchPerPage) {
                        setLoadMore(false);
                    }
                }
            })
            .catch(error => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, username]);

    const repos = reposList && reposList.map(repo => <UserRepoTile key={repo.id} repo={repo} />)

    return repos.length === 0 ?
        (
            <LoaderContainer>
                <PropagateLoader
                    size={15}
                    color={themeContext.colors.contrast}
                    loading={true}
                />
            </LoaderContainer>
        ) : (
            <InfiniteScroll
                dataLength={repos.length}
                next={() => setPage(page + 1)}
                hasMore={loadMore}
                loader={
                    <LoaderContainer>
                        <PropagateLoader
                            size={15}
                            color={themeContext.colors.contrast}
                            loading={true}
                        />
                    </LoaderContainer>
                }
            >
                <Container>
                    {repos}
                </Container>
            </InfiniteScroll>
    );
};

export default UserRepos;