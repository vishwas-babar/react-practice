import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

// this is custom hook
export const useTheme = () => {
    return useContext(ThemeContext);
}