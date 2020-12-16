import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import {PuffLoader} from "react-spinners";


// import styled from 'styled-components'
// const Root = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: #000;
// `


const LoadingIndicator = () => {
    const themeContext = useContext(ThemeContext);


    return (
        <PuffLoader
            size={60}
            color={themeContext.colors.contrast}
            loading={true}
        />
        )
}

export default LoadingIndicator;