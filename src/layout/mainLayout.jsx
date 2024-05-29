import React from 'react';
import Navber from '../component/navber';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer';

const MainLayout = () => {
    return (
        <>
        <Navber/>
        <Outlet/>
        <Footer/>
            
        </>
    );
}

export default MainLayout;
