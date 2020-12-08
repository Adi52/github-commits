import React, { createContext, useState } from 'react';


export const StoreContext = createContext(null);



const StoreProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    return (
        <StoreContext.Provider
            value={{
                theme,
                setTheme,
            }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;