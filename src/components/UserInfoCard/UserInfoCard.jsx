import React, {useContext, useEffect, useRef, useState} from 'react';
import {Container, UserImage, UserName, UserNick} from "./UserInfoCard.css";

import {ThemeContext} from "styled-components";

import {PuffLoader} from "react-spinners";
import {gsap} from "gsap";

const UserInfoCard = ({userInfo}) => {
    const themeContext = useContext(ThemeContext);
    const [imageLoaded, setImageLoaded] = useState(false);

    let image = useRef(null);
    let name = useRef(null);
    let nick = useRef(null);


    useEffect(() => {
        gsap.from([image, name, nick], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            opacity: 0,
            y: 10,
            stagger: {
                amount: 0.3
            }
        })
    }, []);

    return (
        <Container>
            <UserImage loaded={imageLoaded} ref={el => (image = el)}>
                <img
                    src={userInfo["avatar_url"]}
                    alt="avatar"
                    onLoad={() => setImageLoaded(true)}
                />
                <PuffLoader
                    size={60}
                    color={themeContext.colors.contrast}
                    loading={!imageLoaded}
                />
            </UserImage>
            <UserName ref={el => (name = el)}>
                {userInfo.name}
            </UserName>
            <UserNick
                ref={el => (nick = el)}
                href={userInfo["html_url"]}
                target={"_blank"}
            >
                {userInfo["login"]}
            </UserNick>
        </Container>
    );
};

export default UserInfoCard;