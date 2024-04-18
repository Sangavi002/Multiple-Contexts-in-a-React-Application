import { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";

const Navbar = () => {
    const {theme,toggleTheme} = useContext(themeContext);

    return(
        <div>
            <h1 style={{
                color: theme === 'light' ? 'yellow' : 'blue'
            }}>Hello World</h1>
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    )
}

export default Navbar