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
import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import Search from "./pages/Search/Search";
import UserInfo from "./pages/UserRepos/UserInfo";
import Footer from "./components/Footer/Footer";


const App = () => {
    const {theme} = useContext(StoreContext);


    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Router>
                <LogoWrapper/>
                <Switch>
                    <Route exact path={"/"} component={Search}/>
                    <Route path={"/user/:user"} component={UserInfo}/>
                    <Route path={"/:user/:repo"} />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
