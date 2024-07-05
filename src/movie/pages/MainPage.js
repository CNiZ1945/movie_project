import React from 'react';
import { Link } from 'react-router-dom';



function MainPage() {
    











    return (
        <>
            
            <div><Link to='/NoticeViewPage'>NoticeViewPage</Link></div>
            <div><Link to='/NoticeList'>NoticeList</Link></div>
            <div><Link to='/NoticeWrite'>NoticeWrite</Link></div>
            <br />
            <div><Link to='/AdminMemberList'>AdminMemberList</Link></div>
            <div><Link to='/AdminMovieList'>AdminMovieList</Link></div>
            <div><Link to='/AdminMovieListPage'>AdminMovieListPage</Link></div>
            <div><Link to='/AdminMovieUpload'>AdminMovieUpload</Link></div>
            <br />
            <div><Link to='/MoviePage'>MoviePage</Link></div>
            <div><Link to='/MainPage'>MainPage</Link></div>
            <div><Link to='/MoviePlayPage'>MoviePlayPage</Link></div>
            <div><Link to='/MovieSearch'>MovieSearch</Link></div>
            <div><Link to='/NoticeList'>NoticeList</Link></div>
            <br />
            <div><Link to='/MyPage'>MyPage</Link></div>
            <div><Link to='/Login'>Login</Link></div>
            <div><Link to='/WithdrawMember'>WithdrawMember</Link></div>
            <div><Link to='/SignUp'>SignUp</Link></div>
            <div><Link to='/ChangePassword'>ChangePassword</Link></div>
            <div><Link to='/FindIdPassword'>FindIdPassword</Link></div>










        </>




    );
}

























export default MainPage;