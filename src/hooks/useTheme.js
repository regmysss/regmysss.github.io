import { useLayoutEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(null);

    useLayoutEffect(() => {
        const matchTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        setTheme(matchTheme);
    }, []);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, setTheme };
}