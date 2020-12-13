import React from 'react';
import {Container} from "./UserRepos.css";
import UserRepoTile from "./subcomponents/UserRepo/UserRepo";

const UserRepos = ({reposList}) => {

    const repos = reposList.length > 0 && reposList.map(repo => <UserRepoTile key={repo.id} repo={repo} />)




    return (
        <Container>
            {repos}


        </Container>
    );
};

export default UserRepos;