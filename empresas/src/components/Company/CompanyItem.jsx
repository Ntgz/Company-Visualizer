import React from 'react'

const CompanyItem = ({company}) => {

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

            </div>

        </div>
    )
}

export default CompanyItem
