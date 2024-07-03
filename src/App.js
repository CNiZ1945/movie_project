import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import NoticeViewPage from './administrator/notice/pages/NoticeViewPage';
import NoticeListPage from './administrator/notice/pages/NoticeListPage';
import AdminMemberListPage from './administrator/admin/pages/AdminMemberListPage';
import NoticeWritePage from './administrator/notice/pages/NoticeWritePage';
import AdminMovieListPage from './administrator/admin/pages/AdminMovieListPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<NoticeViewPage />} />
                <Route path = "/NoticeList" element={<NoticeListPage />} />
                <Route path = "/NoticeWrite"  element={<NoticeWritePage />}   />
                <Route path = "/AdminMemberList"  element={<AdminMemberListPage />}   />
                <Route path = "/AdminMovieList"  element={<AdminMovieListPage />}   />

            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
