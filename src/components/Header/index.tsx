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
            <h1 className="text-[28px] font-bold text-text">devfinder</h1>

            <button
                className="flex gap-4 items-center cursor-pointer text-text-muted hover:text-text"
                type="button"
                aria-label={`Ativar tema ${theme === "dark" ? "light" : "dark"}`}
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
