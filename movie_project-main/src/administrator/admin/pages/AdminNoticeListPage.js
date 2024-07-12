import React from 'react';
import { Link } from 'react-router-dom';


// css
import "../../../common/css/AdminNoticeListPage.css"

function AdminNoitceListPage() {


    return (
        <>

        <div className="admin_notice_div">
            {/* <!-- 공지사항 제목 --> */}
            <div className="admin_notice_haed">
                <h2>공지사항</h2>
            </div>
            <div className="notice_link">
                <span><Link to="/user/Notice" className='black'>자세히 보러 가기 {'>'}</Link></span>
            </div>

            <div className="admin_notice_list_menu">
                <ul className="admin_notice_list_ul">
                    <li>번호</li>
                    <li>제목</li>
                    <li>날짜</li>
                </ul>
            </div>
            {/* <!-- 공지사항 리스트 --> */}
            <div className="admin_notice_list">
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
                <ul className="admin_notice_list_ul">
                    <li>10</li>
                    <li><Link to="/user/Notive/View" className='black'>공지사항 1</Link></li>
                    <li>2024.06.26</li>
                </ul>
            </div>
            <div className="admin_notice_page">
                <ul className="admin_notice_page_ul">
                    <li>&lt;</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>&gt;</li>
                </ul>

            </div>
        </div>

        </>





    );

}











export default AdminNoitceListPage;