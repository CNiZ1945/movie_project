import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

// page import
import CustomerOutlet from './common/pages/CustomerOutlet';
import AdminOutlet from "./common/pages/AdminOutlet";
import LoginOutlet from './common/pages/LoginOutlet';

// movie
import MainPage from './movie/pages/MainPage';
import MoviePage from './movie/pages/MoviePage';
import MovieSearch from './movie/pages/MovieSearch';


// member
import MyPage from './member/pages/MyPage';
import ChangePassword from './member/pages/ChangePassword';
import FindIdPassword from './member/pages/FindIdPassword';
import SignUp from './member/pages/SignUp';
import WithdrawMember from './member/pages/WithdrawMember';
import LoginPage from './member/pages/LoginPage';


//admin
import NoticeListPage from './administrator/notice/pages/NoticeListPage';
import NoticeViewPage from './administrator/notice/pages/NoticeViewPage';
import NoticeWritetPage from "./administrator/notice/pages/NoticeWritePage";
import AdminNoticeListPage from "./administrator/admin/pages/AdminNoticeListPage";
import AdminMovieListPage from "./administrator/admin/pages/AdminMovieListPage";
import AdminMovieUploadPage from "./administrator/admin/pages/AdminMovieUploadPage";
import AdminMemberListPage from "./administrator/admin/pages/AdminMemberListPage";


function App() {
    return (
        <BrowserRouter>

            <Routes>
                    {/* main hedaer 공유 페이지 */}
                <Route path="/" element={<CustomerOutlet />} >
                    <Route index path="/" element={<MainPage />} />
                    <Route path="/MoviePage" element={<MoviePage />} />
                    <Route path="/MovieSearch" element={<MovieSearch />} />
                    <Route path="/MyPage" element={<MyPage />} />
                    <Route path='/Notice' element={<NoticeListPage />}  />
                    <Route path='/NoticeView' element={<NoticeViewPage />}  />
                    <Route path='/Notice' element={<NoticeListPage />}  />
                    <Route path='/Write' element={<NoticeWritetPage />}  />

                </Route>
                <Route element={<AdminOutlet />} >
                    {/* admin header 공유 페이지 */}
                    <Route path="Admin/Notice" element={<AdminNoticeListPage  />}  />
                    <Route path="Admin/MovieList" element={<AdminMovieListPage  />}  />
                    <Route path="Admin/MovieUpload" element={<AdminMovieUploadPage  />}  />
                    <Route path="Admin/MemberList" element={<AdminMemberListPage  />}  />
                </Route>
                
                <Route element={<LoginOutlet />} >
                    {/* login header 공유 페이지 */}
                    <Route path="/Login" element={<LoginPage  />}  />
                    <Route path="/ChangePassword" element={<ChangePassword  />}  />
                    <Route path="/FindIdPassword" element={<FindIdPassword  />}  />
                    <Route path="/SignUp" element={<SignUp  />}  />
                    <Route path="/WithdrawMember" element={<WithdrawMember  />}  />




                </Route>




            </Routes>
        </BrowserRouter>

    );
}

export default App;
