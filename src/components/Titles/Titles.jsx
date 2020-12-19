import React, {useEffect, useRef} from 'react';
import {Container} from "./Titles.css";

import { gsap } from "gsap";


const Titles = ({h1, h2}) => {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            opacity: 0,
            y: 40,
            stagger: {
                amount: 0.15
            }
        })
    }, [line1, line2]);

    return (
        <Container>
            <div ref={el => (line1 = el)}>
                <h1>{h1}</h1>
            </div>
            <div  ref={el => (line2 = el)}>
                <h2>{h2}</h2>
            </div>
        </Container>
    );
};

export default Titles;