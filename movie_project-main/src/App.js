import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

// page import
import CustomerOutlet from './common/pages/CustomerOutlet';
import AdminOutlet from "./common/pages/AdminOutlet";
import LoginOutlet from './common/pages/LoginOutlet';

// movie
import MainPage from './movie/pages/MainPage';
import MoviePage from './movie/pages/MoviePage';
import MovieSearch from './movie/pages/MovieSearchPage';


// member
import MyPage from './member/pages/MyPage';
import ChangePassword from './member/pages/ChangePassword';
import FindIdPassword from './member/pages/FindIdPasswordPage';
import SignUp from './member/pages/SignUpPage';
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
import AdminMovieUploadFilePage from './administrator/admin/pages/AdminMovieUploadFilePage';
import MoviePlayPage from './movie/pages/MoviePlayPage';


function App() {
    return (
        <BrowserRouter>

            <Routes>
                    {/* main hedaer 공유 페이지 */}
                <Route path="/" element={<CustomerOutlet />} >
                    <Route index path="/" element={<MainPage />} />
                    <Route path="/user/MoviePage" element={<MoviePage />} />
                    <Route path="/user/MoviePlay" element={<MoviePlayPage />} />
                    <Route path="/MovieSearch" element={<MovieSearch />} />
                    <Route path="/user/MyPage" element={<MyPage />} />
                    <Route path='/user/Notice' element={<NoticeListPage />}  />
                    <Route path='/user/Notive/View' element={<NoticeViewPage />}  />
                    <Route path='/admin/Notice/Write' element={<NoticeWritetPage />}  />

                </Route>
                
                <Route element={<AdminOutlet />} >
                    {/* admin header 공유 페이지 */}
                    <Route path="admin/Notice" element={<AdminNoticeListPage  />}  />
                    <Route path="admin/MovieList" element={<AdminMovieListPage  />}  />
                    <Route path="admin/MovieUpload" element={<AdminMovieUploadPage  />}  />
                    <Route path="admin/MovieUploadFile" element={<AdminMovieUploadFilePage  />}  />
                    <Route path="admin/MemberList" element={<AdminMemberListPage  />}  />
                </Route>
                
                <Route element={<LoginOutlet />} >
                    {/* login header 공유 페이지 */}
                    <Route path="/Login" element={<LoginPage  />}  />
                    <Route path="/user/ChangePassword" element={<ChangePassword  />}  />
                    <Route path="/FindIdPassword" element={<FindIdPassword  />}  />
                    <Route path="/SignUp" element={<SignUp  />}  />
                    <Route path="/user/WithdrawMember" element={<WithdrawMember  />}  />




                </Route>




            </Routes>
        </BrowserRouter>

    );
}

export default App;
