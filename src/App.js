import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import NoticeViewPage from './administrator/admin/pages/NoticeViewPage';
import NoticeListPage from './administrator/admin/pages/NoticeListPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<NoticeViewPage />} />
                <Route path = "/NoticeListPage" element={<NoticeListPage />} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
