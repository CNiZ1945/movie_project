import React from 'react';
import {Outlet} from 'react-router-dom';


// page import
import AdminHeader from './AdminHeader';

// css
import '../css/AdminOutlet.css';

function AdministratorPage() {



    return (
        <>
        <div className='adminbody'>
        <AdminHeader />
        <Outlet />

        </div>
        
        
        
        </>
    );

}



export default AdministratorPage;