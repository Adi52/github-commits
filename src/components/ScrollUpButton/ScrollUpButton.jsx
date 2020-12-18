import React from 'react';

import ScrollToTop from "react-scroll-up";
import {ScrollIcon} from "./ScrollUpButton.css";

const ScrollUpButton = () => {
    return (
        <ScrollToTop showUnder={160} style={{bottom: '10px', right: '10px'}}>
            <ScrollIcon />
        </ScrollToTop>
    )
}

export default ScrollUpButton;