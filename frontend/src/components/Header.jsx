import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logonav.png";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <header className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10">
            <div className="max_padd_container px-4 py-3 flex items-center justify-between">
                <div>
                    <Link to="/">
                        <img src={logo} alt="" height={66} width={88} style={{ height: "45px", width: "500px" }} />
                    </Link>
                </div>
                <div className="hidden md:flex gap-x-5 xl:gap-x-12 medium-15">
                    <Navbar />
                </div>
                <div className="flex items-center gap-x-2 sm:gap-x-6">
                    <div className="md:hidden">
                        {!menuOpened ? (
                            <MdMenu className="cursor-pointer hover:text-dark p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
                        ) : (
                            <MdClose className="cursor-pointer hover:text-dark p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
                        )}
                    </div>
                    <div className="flex items-center gap-x-6">
                        <NavLink to={"cart-page"} className="flex items-center">
                            <FaCartShopping className="p-1 h-8 w-6 ring-slate-900/30 ring-1 rounded-full" />
                            <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-pink-500 text-white text-xs -top-2">{getTotalCartItems()}</span>
                        </NavLink>

                        {localStorage.getItem('auth-token') ? <NavLink onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/") }} to={'logout'} className={'btn_pink_rounded flex items-center gap-x-2 medium-16'} style={{ color: 'white' }}>
                            <img src={logout} alt="" height={19} width={19} />
                            Logout
                        </NavLink> :
                            <NavLink to={'login'} className={'btn_pink_rounded flex items-center gap-x-2 medium-16'} style={{ color: 'white' }}>
                                <img src={user} alt="" height={19} width={19} />
                                Login
                            </NavLink>}
                    </div>
                </div>
            </div>
            {menuOpened && (
                <div className="md:hidden flex flex-col gap-y-4 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-100 medium-16 ring-1 ring-slate-900/5 transition-all duration-300">
                    <Navbar />
                </div>
            )}
        </header>
    );
}

export default Header;
