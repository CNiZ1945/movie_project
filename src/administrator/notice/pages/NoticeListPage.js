import React from 'react'
import { Link } from 'react-router-dom';

import '../../../common/css/Notice.css'


function NoticeListPage() {










    return (
        <>
            <div className="notice">
                {/* <!-- 공지 사항 내용 --> */}
                <div className="notice_div">
                    <ul>
                        <li>글번호</li>
                        <li>글 내용</li>
                        <li>작성 시간</li>
                    </ul>
                </div>
                {/* <!-- 공지사항 리스트 --> */}
                <div className="notice_list">
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <Link to="/user/Notive/View">공지사항 1</Link>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!--  ======================== 리스트 페이지 번호 ================================ --> */}
            <div className="page_no">
                <ul className="page_no_ul">
                    <li><Link to="">{'<'}</Link></li>
                    <li><Link to="">1</Link></li>
                    <li><Link to="">2</Link></li>
                    <li><Link to="">3</Link></li>
                    <li><Link to="">4</Link></li>
                    <li><Link to="">5</Link></li>
                    <li><Link to="">6</Link></li>
                    <li><Link to="">7</Link></li>
                    <li><Link to="">8</Link></li>
                    <li><Link to="">9</Link></li>
                    <li><Link to="">10</Link></li>
                    <li><Link to="">{'>'}</Link></li>
                </ul>
            </div>
            {/* <!-- ========================= 글 검색, 글쓰기 버튼 --> */}
            <div className="search_write">
                {/* <!-- 글 검색 --> */}
                <div className="botom_search">
                    <form action="">
                        <input type="text" name="" id="" className="bottom_search_text" /> 
                        <input type="submit" name="" id="" value="검색" />
                    </form>
                </div>
                        {/* <!-- 글쓰기 버튼 --> */}
                <div className="botom_write">
                    <button type="button" className="write_btn" >글쓰기</button>
                </div>
            </div>

        </>

    );


}











export default NoticeListPage;