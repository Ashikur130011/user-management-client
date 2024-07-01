import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Home;