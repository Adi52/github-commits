import React, {useContext} from 'react';
import LogoWrapper from "./components/LogoWrapper/LogoWrapper";

import {ThemeProvider} from 'styled-components'
import GlobalStyles from './index.css'
import {StoreContext} from "./store/StoreProvider";
import {darkTheme, lightTheme} from "./utils/theme";


const App = () => {
    const {theme} = useContext(StoreContext);

    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <LogoWrapper/>
        </ThemeProvider>
    );
}

export default App;
