import React from 'react';

import ScrollToTop from "react-scroll-up";
import {ScrollIcon} from "./ScrollUpButton.css";

const ScrollUpButton = () => {
    return (
        <ScrollToTop showUnder={160} style={{bottom: '7vh'}}>
            <ScrollIcon />
        </ScrollToTop>
    )
}

export default ScrollUpButton;