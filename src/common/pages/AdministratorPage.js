import React from 'react';
import AdminHeader from './common/pages/AdminHeader'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';



function CustomerPage() {



    return (
        <BrowserRouter>
            <AdminHeader />

            <Routes>
                <Route>
                                    {/* admin page */}
                <Route path = "/AdminMemberList"  element={<AdminMemberListPage />}   />
                <Route path = "/AdminMovieList"  element={<AdminMovieListPage />}   />
                <Route path = "/AdminMovieListPage" element = {<AdminMovieListPage />} />
                <Route path = "/AdminMovieUpload" element = {<AdminMovieUploadPage />} />



                </Route>
            </Routes>
        </BrowserRouter>
    );

}



export default CustomerPage;