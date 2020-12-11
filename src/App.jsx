import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components'

import GlobalStyles from './index.css'
import {StoreContext} from "./store/StoreProvider";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {darkTheme, lightTheme} from "./utils/theme";
import {Wrapper} from "./components/LogoWrapper/LogoWrapper.css";
import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import Search from "./pages/Search/Search";
import UserRepos from "./pages/UserRepos/UserRepos";


const App = () => {
    const {theme} = useContext(StoreContext);


    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Router>
                <LogoWrapper/>
                <Wrapper>
                    <Switch>
                        <Route exact path={"/"} component={Search}>
                        </Route>
                        <Route path={"/user/:user"} component={UserRepos}>
                        </Route>
                        <Route path={"/:user/:repo"}>

                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </ThemeProvider>
    );
}

export default App;
