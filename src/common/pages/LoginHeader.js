import React from 'react';
import { Link } from 'react-router-dom';
import logo_white from '../img/logo_white_bi.png';



function LoginHeader() {





    return (
        <>


            <header>
                <div className="logo">
                    <Link to="/"><img src={logo_white} alt="" /></Link>
                </div>
            </header>


        </>
    );






}








export default LoginHeader;