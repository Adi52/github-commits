import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import {PuffLoader} from "react-spinners";

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