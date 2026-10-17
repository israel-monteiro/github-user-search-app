import { createContext } from "react";

export type ThemeName = "light" | "dark";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
    IconMoon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconSun: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
