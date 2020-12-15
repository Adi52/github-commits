import React from 'react';
import {Container, UserImage, UserName, UserNick} from "./UserInfoCard.css";

const UserInfoCard = ({userInfo}) => {


    return (
        <Container>
            <UserImage src={userInfo["avatar_url"]} />

            <UserName>
                {userInfo.name}
            </UserName>

            <UserNick
                href={userInfo["html_url"]}
                target={"_blank"}
            >
                {userInfo["login"]}
            </UserNick>
        </Container>
    );
};

export default UserInfoCard;
