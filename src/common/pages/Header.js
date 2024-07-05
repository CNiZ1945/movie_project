import React from 'react';
import { Link } from 'react-router-dom';




function Header() {













    return (
        <>

            <header>
                {/* <!-- 헤더 오른쪽 --> */}
                <div class="header_right">
                    <div class="logo_img">
                        {/* <!-- 로고 이미지 --> */}
                        <Link href="movie_search.html"><img src="http://placehold.it/70X70" alt="" /></Link>
                    </div>
                </div>
                {/* <!-- 검색창 --> */}
                <div class="search">
                    <form action="">
                        <input type="text" name="" id="" class="search_input" placeholder="오늘은 무슨 영화를 볼까?" />
                        <button class="search_btn" type="submit">
                            <i class="fa-solid fa-magnifying-glass-arrow-right fa-3x" ></i>
                        </button>
                    </form>
                </div>
                {/* <!-- 헤더 왼쪽 --> */}
                <div class="header_left">

                    <div class="profile">
                        {/* <!-- 동그라미 프로필 공간 --> */}
                        <Link href="admin_main.html"> 임시 <br />관리자 페이지</Link>
                    </div>
                    <div class="profile_menu">
                        <ul>
                            <Link href="mypage.html"><li>마이페이지</li></Link>
                            <Link href="notice.html"><li>공지사항</li></Link>
                            <Link href="login.html"><li>로그인</li></Link>
                        </ul>
                    </div>
                    {/* <!-- 추후에 로그인후에 로그아웃으로 바뀌도록 작성 --> */}
                </div>
            </header>









        </>

    );


}


export default Header;