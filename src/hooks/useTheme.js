import { useLayoutEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    });

    return { theme, setTheme };
}