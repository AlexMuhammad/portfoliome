import { createContext, useState } from 'react';

export const ThemeContext = createContext('');
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };
    return (
        <ThemeContext.Provider value={{ darkMode, handleToggle }}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
