import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/HomeComponents/Footer/Footer'
import Header from '../../components/HomeComponents/Header/Header'

export default function HomeTemplate() {
    return (
        <div className='container mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
