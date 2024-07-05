import React from 'react';
import Header from './common/pages/Header'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';



function CustomerPage() {



    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route>
                    <Route path="/" element={<MainPage />} />
                    {/* movie page */}
                    <Route path="/MoviePage" element={<MoviePage />} />
                    <Route path="/MainPage" element={<MainPage />} />
                    <Route path="/MoviePlayPage" element={<MoviePlayPage />} />
                    <Route path="/MovieSearch" element={<MovieSearch />} />

                    {/* member page */}
                    <Route path="/MyPage" element={<MyPage />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/WithdrawMember" element={<WithdrawMember />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/ChangePassword" element={<ChangePassword />} />
                    <Route path="/FindIdPassword" element={<FindIdPassword />} />
                    <Route path="/NoticeList" element={<NoticeListPage />} />


                </Route>
            </Routes>
        </BrowserRouter>
    );

}



export default CustomerPage;