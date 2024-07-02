import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NoticeViewPage from './administrator/admin/pages/NoticeViewPage';

function App() {
    return (
        
        <Routes>
            <Route path = "/" element={<NoticeViewPage />} />

        </Routes>
        
    );
}

export default App;
