import React from 'react'
import { ContextGlobalProvaider } from '../../Context/GoblalContext'
import Header from '../../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'

const PaginaBase = () => {
    return (
        <main>
            <Header />
            <ContextGlobalProvaider>
                <Outlet />
            </ContextGlobalProvaider>
            <Footer />
        </main>
    )
}

export default PaginaBase