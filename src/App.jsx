import React, {useContext, useEffect} from 'react';
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
// import request from "./helpers/request";


const App = () => {
    const {theme} = useContext(StoreContext);


    // const fetchData = async () => {
    //     const { data } = await request.get('/adi52');
    //     console.log(data);
    // };
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);


    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Router>
                <LogoWrapper/>
                <Wrapper>
                    <Switch>
                        <Route exact path={"/"}>
                            <Search />
                        </Route>
                        <Route path={"/repos"}>

                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </ThemeProvider>
    );
}

export default App;
