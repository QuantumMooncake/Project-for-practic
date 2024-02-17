import { NavLink } from "react-router-dom"
import "./Header.css"

function Header () {
    return (
        <nav className="header">
            <NavLink to={'/computers'}>Computers</NavLink>
            <NavLink to={'/Ram_Types'}>RAM Types</NavLink>
            <NavLink to={'/Storage_Types'}>Storage Types</NavLink>
            <NavLink to={'/Buildings'}>Buildings</NavLink>
            <NavLink to={'/Buildings_Types'}>Buildings Types</NavLink>
            <NavLink to={'/Room'}>Room</NavLink>
            <NavLink to={'/Room_Types'}>Room Types</NavLink>
        </nav>
    )
}

export default Header