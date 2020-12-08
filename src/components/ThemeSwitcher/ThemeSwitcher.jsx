import React, {useContext} from 'react';
import {StoreContext} from "../../store/StoreProvider";
import {Switcher} from "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(StoreContext);

    const switchTheme = () => {
        setTheme(() => {
            if (theme === 'dark') {
                return 'light';
            } else {
                return 'dark';
            }
        })
    }

    return (
        <Switcher>
            <input type="checkbox" id="switch" onClick={switchTheme}/>
            <label htmlFor="switch">
                <span>🌞 🌙</span>
            </label>
        </Switcher>
    );
};

export default ThemeSwitcher;