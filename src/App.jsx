import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components'
import {StoreContext} from "./store/StoreProvider";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Themes
import {darkTheme, lightTheme} from "./utils/theme";

// Pages
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Search from "./pages/Search/Search";
import CommitsTimeline from "./pages/CommitsTimeline/CommitsTimeline";

// Components and styles
import GlobalStyles from './index.css'
import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import UserInfo from "./pages/UserRepos/UserInfo";
import Footer from "./components/Footer/Footer";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";


const App = () => {
    const {theme} = useContext(StoreContext);


    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Router basename={process.env.PUBLIC_URL}>
                <LogoWrapper/>
                <Switch>
                    <Route exact path={"/"} component={Search}/>
                    <Route exact path={"/user/:user"} component={UserInfo}/>
                    <Route path={"/user/:user/:repo"} component={CommitsTimeline}/>
                    <Route component={ErrorPage} />
                </Switch>
                <Footer />
                <ScrollUpButton />
            </Router>
        </ThemeProvider>
    );
}

export default App;
