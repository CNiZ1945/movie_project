import React from "react";

import '../../../common/css/AdminMemberList.css';

function AdminMemberListPage() {








    return (
        <>
            <div class="list_div">

                <div class="admin_member_list">
                    <div>
                        <ul class="list content">
                            {/* <!-- 리스트 구획 설명 --> */}
                            <li class="checkbox"> {/* <!-- 체크 박스를 위한 빈 공간--> */} </li>
                            <li class="mem_no">회원 정렬용 번호</li>
                            <li class="mem_id">회원 id</li>
                            <li class="mem_email">이메일</li>
                            <li class="mem_phone">연락처</li>
                            <li class="mem_gender">남/녀</li>
                            <li class="mem_birth">생년월일</li>
                        </ul>
                    </div>
                    <div>
                        {/* <!-- 회원 리스트 --> */}
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">1</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">2</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999.06.02</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">3</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999/06/02</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">4</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">010-1588-3820</li>
                            <li class="mem_gender">여</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">5</li>
                            <li class="mem_id">qwertnasver</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">6</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">7</li>
                            <li class="mem_id">qweqe123123rt</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">8</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">9</li>
                            <li class="mem_id">1234567890123456789</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>
                        <ul class="list ">
                            <li class="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li class="mem_no">10</li>
                            <li class="mem_id">qwert</li>
                            <li class="mem_email">naver@naver.com</li>
                            <li class="mem_phone">1588-3820</li>
                            <li class="mem_gender">남</li>
                            <li class="mem_birth">1999년 6월 2일</li>
                        </ul>

                    </div>
                </div>

                {/* <!-- ======================== 리스트 페이지 ===================== --> */}
                <div class="list_number">
                    <ul class="list_number_ul">
                        <li id="">&lt;</li>
                        <li id="">1</li>
                        <li id="">2</li>
                        <li id="">3</li>
                        <li id="">4</li>
                        <li id="">5</li>
                        <li id="">6</li>
                        <li id="">7</li>
                        <li id="">8</li>
                        <li id="">9</li>
                        <li id="">10</li>
                        <li id="">&gt;</li>
                    </ul>
                </div>
                {/* <!-- ======================= 영화 검색 ========================= --> */}
                <div class="admmin_member_search_div">
                    <div class="search_form">
                        <form action="">
                            {/* <!-- 영화 검색 --> */}
                            <input type="text" name="" id="" placeholder="회원 검색" />
                            <input type="submit" name="" id="" value="검색" />
                        </form>

                    </div>
                    <div class="edit_btn">
                        {/* <!-- 영화 추가/삭제 버튼 --> */}
                        <button class="delete_member">회원 삭제</button>
                    </div>

                </div>
            </div>

        </>
    );






}









export default AdminMemberListPage;