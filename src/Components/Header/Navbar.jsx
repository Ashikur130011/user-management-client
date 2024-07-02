import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(result => {
            alert('Logout Successfully')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const navLink = <>
        <li><NavLink to="/login" className="mx-3">Login</NavLink></li>
        <li><NavLink to="/user" className="mx-3">Users</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">User Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <>
                    <p className='mr-2'>{user.email}</p>
                    <a onClick={handleLogOut} className='btn btn-sm btn-outline btn-warning'>Log Out</a>
                    </> :
                    <NavLink to="/login"  className="btn btn-sm btn-outline btn-success">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;