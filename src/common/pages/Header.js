import React from 'react';
import { Link} from 'react-router-dom';



function Header() {













    return (
        <>

            <header>
                {/* <!-- 헤더 오른쪽 --> */}
                <div className="header_right">
                    <div className="logo_img">
                        {/* <!-- 로고 이미지 --> */}
                        <Link to="/"><img src="http://placehold.it/70X70" alt="" /></Link>
                    </div>
                </div>
                {/* <!-- 검색창 --> */}
                <div className="search">
                    <form action="">
                        <input type="text" name="" id="" className="search_input" placeholder="오늘은 무슨 영화를 볼까?" />
                        <button className="search_btn" type="submit">
                            <i className="fa-solid fa-magnifying-glass-arrow-right fa-3x" ></i>
                        </button>
                    </form>
                </div>
                {/* <!-- 헤더 왼쪽 --> */}
                <div className="header_left">

                    <div className="profile">
                        {/* <!-- 동그라미 프로필 공간 --> */}
                        <Link to="Admin/Notice"> 임시 <br />관리자 페이지</Link>
                    </div>
                    <div className="profile_menu">
                        <ul>
                            <Link to="/MyPage"><li>마이페이지</li></Link>
                            <Link to="/Notice"><li>공지사항</li></Link>
                            <Link to="/Login"><li>로그인</li></Link>
                        </ul>
                    </div>
                    {/* <!-- 추후에 로그인후에 로그아웃으로 바뀌도록 작성 --> */}
                </div>
            </header>
            
          

 

        </>

    );


}


export default Header;