import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles} flex gap-x-5 items-center`}>
            <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""}>
                <div className="flexCenter gap-x-1">HOME</div>
            </NavLink>
            <NavLink to={'/mens'} className={({ isActive }) => isActive ? "active_link" : ""}>
                <div className="flexCenter gap-x-1">MEN</div>
            </NavLink>
            <NavLink to={'/womens'} className={({ isActive }) => isActive ? "active_link" : ""}>
                <div className="flexCenter gap-x-1">WOMEN</div>
            </NavLink>
            <NavLink to={'/kids'} className={({ isActive }) => isActive ? "active_link" : ""}>
                <div className="flexCenter gap-x-1">KIDS</div>
            </NavLink>
        </nav>
    );
}

export default Navbar;
