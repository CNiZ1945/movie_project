import React from 'react'


import '../../../common/css/Notice.css'


function NoticeListPage() {










    return (
        <>
            <div class="notice">
                {/* <!-- 공지 사항 내용 --> */}
                <div class="notice_div">
                    <ul>
                        <li>글번호</li>
                        <li>글 내용</li>
                        <li>작성 시간</li>
                    </ul>
                </div>
                {/* <!-- 공지사항 리스트 --> */}
                <div class="notice_list">
                    <ul>
                        <li>
                            1
                        </li>
                        <li>
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
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
                            <a href="post_view.html">공지사항 1</a>
                        </li>
                        <li>
                            2024-06-24
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!--  ======================== 리스트 페이지 번호 ================================ --> */}
            <div class="page_no">
                <ul class="page_no_ul">
                    <li><a href="">&lt;</a></li>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">6</a></li>
                    <li><a href="">7</a></li>
                    <li><a href="">8</a></li>
                    <li><a href="">9</a></li>
                    <li><a href="">10</a></li>
                    <li><a href="">&gt;</a></li>
                </ul>
            </div>
            {/* <!-- ========================= 글 검색, 글쓰기 버튼 --> */}
            <div class="search_write">
                {/* <!-- 글 검색 --> */}
                <div class="botom_search">
                    <form action="">
                        <input type="text" name="" id="" class="bottom_search_text" /> 
                        <input type="submit" name="" id="" value="검색" />
                    </form>
                </div>
                        {/* <!-- 글쓰기 버튼 --> */}
                <div class="botom_write">
                    <button type="button" class="write_btn" >글쓰기</button>
                </div>
            </div>

        </>

    );


}











export default NoticeListPage;