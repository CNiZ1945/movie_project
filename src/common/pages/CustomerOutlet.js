import React from 'react';
import {Outlet} from 'react-router-dom';




// page import
import Header from './Header'



function CustomerPage() {



    return (
        <>
        <Header />
        <Outlet />
        </>
    );

}



export default CustomerPage;