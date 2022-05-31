import React from 'react'
import AuthLayout from './AuthLayout'
import CompanyList from './CompanyList'
import CompanyForm from './CompanyForm'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// C:\Users\nicot\OneDrive\Escritorio\Trabajos\miRepo\proyecto2\empresas\src\components\Navbar\Navbar.jsx
function Aplicacion() {

    return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<CompanyList/>}/>
                <Route path="CompanyForm" element={<CompanyForm/>}/>                 
            </Route>
        </Routes>     
    </BrowserRouter>
    )
}

export default Aplicacion
