import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components'
import {StoreContext} from "./store/StoreProvider";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {CSSTransition, TransitionGroup} from "react-transition-group";

// Themes
import {darkTheme, lightTheme} from "./utils/theme";

// Pages
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Search from "./pages/Search/Search";
import CommitsTimeline from "./pages/CommitsTimeline/CommitsTimeline";

// Components and styles
import GlobalStyles, {TransitionGroupWrapper} from './index.css'
import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import UserInfo from "./pages/UserRepos/UserInfo";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";

import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


const App = () => {
    const {theme} = useContext(StoreContext);

    return (

        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop/>
                <LogoWrapper/>
                <Route style={{paddingBottom: 50}} render={({location}) => (
                    <TransitionGroupWrapper>
                        <TransitionGroup className="transition-group">
                            <CSSTransition
                                key={location.key}
                                timeout={{ enter: 500, exit: 500 }}
                                classNames="fade"
                            >
                                <section className="route-section">
                                    <Switch location={location}>
                                        <Route exact path={"/"} component={Search}/>
                                        <Route exact path={"/user/:user"} component={UserInfo}/>
                                        <Route path={"/user/:user/:repo"} component={CommitsTimeline}/>
                                        <Route component={ErrorPage} />
                                    </Switch>
                                </section>
                            </CSSTransition>
                        </TransitionGroup>
                    </TransitionGroupWrapper>

                 )}/>


                <ScrollUpButton />
                <Footer />
            </Router>
        </ThemeProvider>

    );
}

export default App;
