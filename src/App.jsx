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
import GlobalStyles from './index.css'
import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import UserInfo from "./pages/UserRepos/UserInfo";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";

import styled from 'styled-components';
import Footer from "./components/Footer/Footer";

const TransitionGroupWrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 1;
    transform: scale(1);

    
    &.fade-exit-active {
        opacity: 0.01;
        transition: opacity 500ms ease-in;
    }
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding-bottom: 50px;
  }
`;


const App = () => {
    const {theme} = useContext(StoreContext);



    return (

        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Router basename={process.env.PUBLIC_URL}>
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
