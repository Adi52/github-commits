import React, {useEffect, useState} from 'react';
import request from "../../helpers/request";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import {Container} from "./UserInfo.css";
import UserRepos from "../../components/UserRepos/UserRepos";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import ErrorPage from "../ErrorPage/ErrorPage";


const UserInfo = ({match}) => {
    const username = match.params.user;

    const [userInfo, setUserInfo] = useState({});



    useEffect(() => {
        request.get(`/users/${username}`)
            .then((response) => {
                if (response && response.status === 404) {
                    console.clear();
                    setUserInfo(false);
                    // <Redirect to="/404" />
                } else {
                    setUserInfo(response.data);
                }
            })
            .catch()


    }, [username])

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(username)} - githubCommits`;
    }, [username])

    return userInfo ? (
        <Container>
            <UserInfoCard userInfo={userInfo} />
            <UserRepos username={username} />
        </Container>
    ) : <ErrorPage variant={'user'} username={username}/>
}

export default UserInfo;