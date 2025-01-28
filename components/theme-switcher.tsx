"use client"

import { useEffect, useState } from "react";
import { Button } from "@powerhousedao/design-system"

export function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        document.documentElement.setAttribute("data-mode", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return <Button color="dark" onClick={() => setIsDarkMode(!isDarkMode)}>Theme: {isDarkMode ? "Dark" : "Light"}</Button>
}