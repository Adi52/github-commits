import React, {useEffect, useState} from 'react';
import request from "../../helpers/request";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import {Container} from "./UserInfo.css";
import UserRepos from "../../components/UserRepos/UserRepos";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";




const UserInfo = ({match}) => {
    const username = match.params.user;

    const [userInfo, setUserInfo] = useState({});



    useEffect(() => {
        request.get(`/users/${username}`)
            .then((response) => {
                if (response && response.status === 404) {
                    console.clear();
                    setUserInfo('Invalid username!');
                } else {
                    // When username is valid - fetch user repos
                    setUserInfo(response.data);
                }
            })
            .catch()


    }, [username])

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(username)} - githubCommits`;
    }, [username])

    return (
        <Container>
            <UserInfoCard userInfo={userInfo} />
            <UserRepos username={username} />
        </Container>
    )
}

export default UserInfo;