import React from 'react'
import * as CompanyServer from "./CompanyServer"

const CompanyItem = ({company, listCompanies}) => {


    const handleDelete= async (companyId)=>{
        
        await CompanyServer.deleteCompany(companyId);
        listCompanies();
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h1 className="card-title">
                        {company.name}
                </h1>
                <p className="card-text">
                    Fundado: <strong>{company.foundation}</strong>
                </p>
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary"> Ir al sitio </a>
                <button onClick={()=>company.id && handleDelete(company.id)} className="btn btn-danger my-2">Eliminar empresa</button>
                {/* se comprueba que primero exista el dato para luego crear el enlace   */}
            </div>

        </div>
    )
}

export default CompanyItem
