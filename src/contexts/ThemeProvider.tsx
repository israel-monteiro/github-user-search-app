import { useEffect, useState } from "react";
import { ThemeContext, type ThemeName } from "./ThemeContext";
import IconMoon from "../assets/icons/icon-moon.svg?react";
import IconSun from "../assets/icons/icon-sun.svg?react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const localStorageKey = "@GitHubUserSearch:theme";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeName>(() => {
        const themeFromLocalStorage = localStorage.getItem(localStorageKey);
        return themeFromLocalStorage === "light" || themeFromLocalStorage === "dark" ? themeFromLocalStorage : "dark";
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(localStorageKey, theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme, IconMoon, IconSun }}>{children}</ThemeContext.Provider>;
};
