import { Link, NavLink } from "react-router-dom"
import "../css/Navbar.css"

function NavBar () {

    return (

        <div  className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className="nav-links">Home</NavLink>
                <NavLink to="/favourite" className="nav-links">Favourite</NavLink>
            </div>
        </div>
    )

}

export default NavBar