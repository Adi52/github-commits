import React, {useContext, useEffect, useState} from 'react';
import {Container, LoaderContainer} from "./UserRepos.css";
import UserRepoTile from "./subcomponents/UserRepo/UserRepo";
import InfiniteScroll from "react-infinite-scroll-component";
import {ImpulseSpinner} from "react-spinners-kit";
import request from "../../helpers/request";
import {ThemeContext} from "styled-components";

const UserRepos = ({username}) => {

    const themeContext = useContext(ThemeContext);

    const [page, setPage] = useState(1);
    const [reposList, setReposList] = useState([]);
    const [loadMore, setLoadMore] = useState(true);


    useEffect(() => {
        request.get(`/users/${username}/repos?per_page=6&page=${page}`)
            .then((response) => {
                if (response && response.status === 404) {
                    console.clear();
                } else {
                    setReposList([...reposList, ...response.data]);

                    if (response.data.length === 0) {
                        setLoadMore(false);
                    }
                }
            })
            .catch()
    }, [page]);





    const repos = reposList && reposList.map(repo => <UserRepoTile key={repo.id} repo={repo} />)




    return (
            <InfiniteScroll
                dataLength={repos.length}
                next={() => setPage(page + 1)}
                hasMore={loadMore}
                loader={
                    <LoaderContainer>
                        <ImpulseSpinner
                            size={30}
                            frontColor={themeContext.colors.contrast}
                            backColor={themeContext.colors.secondary}
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