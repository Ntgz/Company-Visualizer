import React from 'react'
import { useState } from 'react';

import  * as CompanyServer  from './CompanyServer';

const CompanyForm = () => {
    // const [ name, setName ] = useState('')
    // const [ foundation, setFoundation ] = useState('')
    // const [ website, setWebsite ] = useState('')

    const initialState = { id: 0, name: "", foundation: 1950, website: ""};
    const [company, setCompany] = useState(initialState)
    const handleInputChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value});//se modifica el name con el value
    }


    
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let res;
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();
        if(data.message === "success"){
            setCompany(initialState);
        }
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className="col-md-3 mx-auto">
            
            <h2 className="mb-3 text-center mt-5">Company</h2>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Name</label>
                <input type="text" name="name"  value = {company.name} onChange = { handleInputChange} className="form-control"></input>
            </div>
            <div className="mb-3">
                <label>Foundation</label>
                <input type="text" name="foundation"  value = {company.foundation} onChange = { handleInputChange} className="form-control"></input>
            </div>
            <div className="mb-3">
                <label>Website</label>
                <input type="url" name="website"  value = {company.namewebsite} onChange = { handleInputChange} className="form-control"></input>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Registrar</button>
            </div>
        </form>
        </div>
    )
}

export default CompanyForm
