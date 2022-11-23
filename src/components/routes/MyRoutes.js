import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../layouts/Footer'
import MainNav from '../layouts/MainNav'
import Movies from '../Movies'
import Series from '../Series'
import Trending from '../Trending'

const MyRoutes = () => {
    return (

        <BrowserRouter>
            <MainNav />
            <Routes>
                <Route path='/' element={<Trending />} />
                <Route path='/trending' element={<Trending />} />
                <Route path="/peliculas" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path='*' element={
                    <div className='page'>
                        <h1 className='heading'>Error 404</h1>
                        <p>Página no encontrada</p>
                    </div>
                } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default MyRoutes