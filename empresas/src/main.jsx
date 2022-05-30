import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar/Navbar';
import CompanyList from './components/Company/CompanyList';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      {/* <CompanyForm/> */}
      <Navbar/>
    
    <div className="container my-4">
      <CompanyList/>

    </div>
    </div>
  </React.StrictMode>
)
