import React, {useEffect, useState} from 'react';
import request from "../../helpers/request";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import {Container} from "./UserInfo.css";
import UserRepos from "../../components/UserRepos/UserRepos";





const UserInfo = ({match}) => {
    const username = match.params.user;

    const [userInfo, setUserInfo] = useState({});
    const [reposList, setReposList] = useState({});
    
    
    useEffect(() => {
        request.get(`/users/${username}`)
            .then((response) => {
                if (response && response.status === 404) {
                    console.clear();
                    setUserInfo('Invalid username!');
                } else {
                    // When username is valid - fetch user repos
                    setUserInfo(response.data);
                    request.get(`/users/${username}/repos?per_page=1000`)
                        .then((response) => {
                            if (response && response.status === 404) {
                                console.clear();
                            } else {
                                setReposList(response.data);
                            }
                        })
                        .catch()
                }
            })
            .catch()


    }, [username])


    return (
        <Container>
            <UserInfoCard userInfo={userInfo} />
            <UserRepos reposList={reposList} />
        </Container>
    )
}

export default UserInfo;