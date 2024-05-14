import React from 'react'
import logo from '../assets/logonav.png';
const Navbar = () => {
    return (
        <nav className='max_padd_container flexBetween bg-white py-1 rimg-1 ring-slate-900/4 relative'>
            <div><img src={logo} alt="" style={{ height: '50px', width: '450px' }} /></div>
            <div className='uppercase bold-22 text-white bg-pink-500 px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:px-1'><center>Admin Dashboard</center></div>
            <div></div>
        </nav>
    )
}

export default Navbar