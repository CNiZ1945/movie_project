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
import ChangePassword from './member/pages/ChangePassword';
import MoviePlayPage from './movie/pages/MoviePlayPage';
import MovieSearch from './movie/pages/MovieSearch';
import WithdrawMember from './member/pages/WithdrawMember';
import FindIdPassword from './member/pages/FindIdPassword';
import Header from './common/Header'

function App() {
    return (
        <BrowserRouter>
        <Header />

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
                <Route path = "/MainPage" element = {<MainPage />} />
                <Route path = "/MoviePlayPage" element = {<MoviePlayPage />} />
                <Route path = "/MovieSearch" element = {<MovieSearch />} />

                {/* member page */}
                <Route path = "/MyPage" element = {<MyPage />} />
                <Route path = "/Login" element = {<Login />} />
                <Route path = "/WithdrawMember" element = {<WithdrawMember />} />
                <Route path = "/SignUp" element = {<SignUp />} />
                <Route path = "/ChangePassword" element = {<ChangePassword />} />
                <Route path = "/FindIdPassword" element = {<FindIdPassword />} />
                


            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
