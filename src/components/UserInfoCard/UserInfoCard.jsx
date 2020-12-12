import React from 'react';
import {Container, UserImage, UserNick} from "./UserInfoCard.css";

const UserInfoCard = ({userInfo}) => {


    return (
        <Container>
            <UserImage src={userInfo.avatar_url} />
            <UserNick
                href={userInfo.html_url}
                target={"_blank"}
            >
                {userInfo.login}
            </UserNick>
        </Container>
    );
};

export default UserInfoCard;
