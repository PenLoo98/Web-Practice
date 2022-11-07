import React,{useState} from "react";

function Button(props) {
    const [theme,setTheme] = useState("light");
    const toggleTheme = (() => {
        setTheme(theme => theme === "light" ? "dark" : "light");
    }
    );
    // const toggleTheme = useCallback(() => {
    //     setTheme(theme => theme === "light" ? "dark" : "light");
    // }
    // );
    return (
        <button onClick={toggleTheme} value={{theme,toggleTheme}}/>
    );
}

export default Button;