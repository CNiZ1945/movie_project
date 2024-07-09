import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import '../../../common/css/Notice.css'


function NoticeListPage() {

    const NoticeListInfo = [
        { noticeNO: 1, noticeTitle: "공지사항 1", noticeTime: "2024 - 07- 09" },
        { noticeNO: 2, noticeTitle: "공지사항 2공지사항 2", noticeTime: "2024 - 07- 09" },
        { noticeNO: 3, noticeTitle: "공지사항 3공지사항 3공지사항 3", noticeTime: "2024 - 07- 09" },
        { noticeNO: 4, noticeTitle: "공지사항 4공지사항 4공지사항 4공지사항 4", noticeTime: "2024 - 07- 09" },
        { noticeNO: 5, noticeTitle: "공지사항 5공지사항 5공지사항 5공지사항 5공지사항 5", noticeTime: "2024 - 07- 09" },
        { noticeNO: 6, noticeTitle: "공지사항 6공지사항 6공지사항 6공지사항 6공지사항 6공지사항 6", noticeTime: "2024 - 07- 09" },
        { noticeNO: 7, noticeTitle: "공지사항 7", noticeTime: "2024 - 07- 09" },
        { noticeNO: 8, noticeTitle: "공지사항 8", noticeTime: "2024 - 07- 09" },
        { noticeNO: 9, noticeTitle: "공지사항 9", noticeTime: "2024 - 07- 09" },
        { noticeNO: 100000, noticeTitle: "공지사항 10", noticeTime: "2024 - 07- 09" },

    ]

    const Navigate = useNavigate();






    return (
        <>
            <div className='noticeHead'>
                <span>공지사항</span>
            </div>
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
                    {
                        NoticeListInfo.map((notice, index) => (
                            <ul key={index}>
                                <li>
                                    {notice.noticeNO}
                                </li>
                                <li>
                                    <Link to="/user/Notive/View" className='white'>{notice.noticeTitle}</Link>
                                </li>
                                <li>
                                    {notice.noticeTime}
                                </li>
                            </ul>
                        ))
                    }


                </div>
            </div>
            {/* <!--  ======================== 리스트 페이지 번호 ================================ --> */}
            <div className="page_no">
                <ul className="page_no_ul">
                    <li><Link to="" className='white'>{'<'}</Link></li>
                    <li><Link to="" className='white'>1</Link></li>
                    <li><Link to="" className='white'>2</Link></li>
                    <li><Link to="" className='white'>3</Link></li>
                    <li><Link to="" className='white'>4</Link></li>
                    <li><Link to="" className='white'>5</Link></li>
                    <li><Link to="" className='white'>6</Link></li>
                    <li><Link to="" className='white'>7</Link></li>
                    <li><Link to="" className='white'>8</Link></li>
                    <li><Link to="" className='white'>9</Link></li>
                    <li><Link to="" className='white'>10</Link></li>
                    <li><Link to="" className='white'>{'>'}</Link></li>
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
                    <button type="button" className="write_btn" onClick={() => Navigate("/admin/Notice/Write")} >글쓰기</button>
                </div>
            </div>

        </>

    );


}











export default NoticeListPage;