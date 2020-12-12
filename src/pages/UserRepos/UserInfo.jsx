import React, {useEffect, useState} from 'react';
import request from "../../helpers/request";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import {Container} from "./UserInfo.css";

//https://api.github.com/users/Adi52/repos

const UserInfo = ({match}) => {
    const username = match.params.user;

    const [userInfo, setUserInfo] = useState({});
    const [reposList, setReposList] = useState({});


    useEffect(() => {
        request.get(`/users/${username}/repos`)
            .then((response) => {
                if (response && response.status === 404) {
                    console.clear();
                    setUserInfo('Invalid username!');
                } else {
                    setUserInfo(response.data[0].owner);
                    setReposList(response.data);
                }
            })
            .catch()

    }, [username])


    return (
        <Container>
            <UserInfoCard userInfo={userInfo} />
        </Container>
    )
}

export default UserInfo;