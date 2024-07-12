import React from 'react';
import LoginHeader from './LoginHeader';
import { Outlet } from "react-router-dom"

function LoginOutlet() {
    






    return(
        <>
       
        <div className='mainbody'>
            
        <LoginHeader/>
        <Outlet />
        {/* <Footer /> */}
        </div>

        </>
        
        
        
        
    
    );

}












export default LoginOutlet;