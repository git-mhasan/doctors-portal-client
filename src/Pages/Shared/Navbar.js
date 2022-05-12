import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="" className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
            </div>
            <div className="md:flex navbar-end hidden">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="flex-none dropdown dropdown-end md:hidden">
                <label tabIndex="0" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content items-end mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;