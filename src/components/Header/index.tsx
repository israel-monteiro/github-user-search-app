import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Header deve estar dentro de ThemeProvider");
    }
    const { theme, toggleTheme, IconMoon, IconSun } = context;

    const ThemeIcon = theme === "dark" ? IconSun : IconMoon;

    return (
        <header className="flex w-full justify-between">
            <h1 className="text-[26px] font-bold text-text leading-[100%]">devfinder</h1>

            <button
                className="flex gap-4 items-center cursor-pointer text-text-muted hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                type="button"
                aria-label={`Activate theme ${theme === "dark" ? "light" : "dark"}`}
                onClick={toggleTheme}
            >
                <span className="text-[13px] font-bold  leading-[140%] tracking-[2.5px]">
                    {theme === "dark" ? "LIGHT" : "DARK"}
                </span>

                <ThemeIcon className="h-5 w-5" />
            </button>
        </header>
    );
};
