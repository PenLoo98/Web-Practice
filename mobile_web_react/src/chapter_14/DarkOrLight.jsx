import React,{ useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme,setTheme] = useState("light");
    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        }
        // setTheme(theme => theme === "light" ? "dark" : "light");
    },[theme]);
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;