import React from 'react';
import {Outlet} from 'react-router-dom';


// page import
import AdminHeader from './AdminHeader';



function AdministratorPage() {



    return (
        <>
        <AdminHeader />
        <Outlet />
        
        
        
        </>
    );

}



export default AdministratorPage;