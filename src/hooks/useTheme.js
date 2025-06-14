import { useLayoutEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme)
            return storedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    function toggleTheme(newTheme) {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
}