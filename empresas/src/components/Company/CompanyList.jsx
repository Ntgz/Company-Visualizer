import React, {useState, useEffect} from "react";
import * as CompanyServer from './CompanyServer';
const CompanyList = () => {
    const [companies,setCompanies] = useState([]);
    const listCompanies= async() =>{
        try {
            const res = await CompanyServer.listCompanies();
            const data = await res.json();
            setCompanies(data.companies);
        } catch (error) {
            console.log(error);
            
        }
    };
    useEffect(()=>{
        listCompanies();
    },[]);
    return(
        <>

            <div>
                {companies.map((company)=>(
                    <h2>{company.name}</h2>
                ))}
            </div>

        </>
    );
}; 


export default CompanyList;