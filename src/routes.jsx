import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaBase from './Pages/PaginaBase'
import Home from './Pages/Home'
import NuevoVideo from './Pages/NuevoVideo'
import VerVideo from './Pages/VerVideo'
import NotFount from './Pages/Not Fount/NotFount'

const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />} />
                    <Route path="nuevovideo" element={<NuevoVideo />} />
                    <Route path="video/:id" element={<VerVideo />} />
                    <Route path="*" element={<NotFount />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes