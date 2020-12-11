
import React from 'react';


const UserRepos = ({match}) => {
    const username = match.params.user;

    return (
        <div>{username}</div>
    )
}

export default UserRepos;