import { useLayoutEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(null);

    function toggleTheme(newTheme) {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            toggleTheme(storedTheme);
            return;
        }

        const matchTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        toggleTheme(matchTheme);
    }, []);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
}