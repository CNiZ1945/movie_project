import React from 'react';
import { Link } from 'react-router-dom';



function AdminHeader() {








    return (
        <>
        <div className='menu'>
            <div>
                <Link to="main.html">
                    홈페이지로 돌아가기
                </Link>
            </div>
            <div>
                <Link to="main.html">
                    공지 사항
                </Link>
            </div>
            <div>
                <Link to="main.html">
                    회원 관리
                </Link>
            </div>
            <div>
                <Link to="main.html">
                    영화 관리
                </Link>
            </div>


        </div>

        </>
    );

}





export default AdminHeader;