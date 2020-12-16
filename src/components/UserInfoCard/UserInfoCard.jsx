import React, {useContext, useState} from 'react';
import {Container, UserImage, UserName, UserNick} from "./UserInfoCard.css";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import {CircleSpinner} from "react-spinners-kit";
import {ThemeContext} from "styled-components";

const UserInfoCard = ({userInfo}) => {
    const themeContext = useContext(ThemeContext);
    const [imageLoaded, setImageLoaded] = useState(false);


    return (
        <Container>
            <UserImage loaded={imageLoaded}>
                <img
                    src={userInfo["avatar_url"]}
                    alt="avatar"
                    onLoad={() => setImageLoaded(true)}
                />
                <CircleSpinner size={30} color={themeContext.colors.contrast} loading={!imageLoaded} />

            </UserImage>

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
