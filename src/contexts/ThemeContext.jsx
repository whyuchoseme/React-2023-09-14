import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');
    const switchTheme = () => {
        setTheme(theme === 'default' ? 'dark' : 'default');
    }

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}