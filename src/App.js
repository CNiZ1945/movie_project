import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import NoticeViewPage from './administrator/notice/pages/NoticeViewPage';
import NoticeListPage from './administrator/notice/pages/NoticeListPage';
import AdminMemberListPage from './administrator/admin/pages/AdminMemberListPage';
import NoticeWritePage from './administrator/notice/pages/NoticeWritePage';
import AdminMovieListPage from './administrator/admin/pages/AdminMovieListPage';
import AdminMovieUploadPage from './administrator/admin/pages/AdminMovieUploadPage';
import MoviePage from './movie/pages/MoviePage';
import MainPage from './movie/pages/MainPage';
import MyPage from './member/pages/MyPage';
import Login from './member/pages/Login';
import SignUp from './member/pages/SignUp';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<MainPage />} />

                {/* notice page */}
                <Route path = "/NoticeViewPage" element={<NoticeViewPage />} />
                <Route path = "/NoticeList" element={<NoticeListPage />} />
                <Route path = "/NoticeWrite"  element={<NoticeWritePage />}   />
                
                {/* admin page */}
                <Route path = "/AdminMemberList"  element={<AdminMemberListPage />}   />
                <Route path = "/AdminMovieList"  element={<AdminMovieListPage />}   />
                <Route path = "/AdminMovieListPage" element = {<AdminMovieListPage />} />
                <Route path = "/AdminMovieUpload" element = {<AdminMovieUploadPage />} />
                
                {/* movie page */}
                <Route path = "/MoviePage" element = {<MoviePage />} />

                {/* member page */}
                <Route path = "/MyPage" element = {<MyPage />} />
                <Route path = "/Login" element = {<Login />} />
                <Route path = "/WithdrawMember" element = {<WithdrawMember />} />
                <Route path = "/SignUp" element = {<SignUp />} />
                


            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
