import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import { CircleSpinner } from "react-spinners-kit";



const Root = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`



const LoadingIndicator = () => {
    const themeContext = useContext(ThemeContext);


    return (
            // <Root>
                <CircleSpinner size={30} color={themeContext.colors.contrast} loading={true} />
            // </Root>
        )
}

export default LoadingIndicator;