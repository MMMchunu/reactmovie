import { Link, NavLink } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import "../css/Navbar.css"

const THEMES = [
    
    { value: "light",  label: "Light" },
    { value: "dark",   label: "Dark" },
]


function NavBar () {
    const { theme, setTheme} = useTheme()

    return (

        <div  className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className="nav-links">Home</NavLink>
                <NavLink to="/favourite" className="nav-links">Favourite</NavLink>

                 <fieldset className="theme-switch">
                    <legend className="visually-hidden">Colour theme</legend>

                    {THEMES.map(({ value, label }) => (
                        <label key={value} className="theme-option">
                            <input
                                type="radio"
                                name="theme"
                                value={value}
                                checked={theme === value}
                                onChange={() => setTheme(value)}
                            />
                            <span>{label}</span>
                        </label>
                    ))}
                </fieldset>

            </div>
        </div>
    )

}

export default NavBar