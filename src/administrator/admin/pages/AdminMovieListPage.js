import React from "react";

import '../../../common/css/AdminMovieList.css';

function AdminMovieListPage() {










    return (
        <>
            <div className="list_div">
                <div className="admin_movie_haed">
                    <h2>영화 관리</h2>
                </div>
                <div className="admin_movie_list">
                    <div>
                        <ul className="list content">
                            {/* <!-- 리스트 구획 설명 --> */}


                            <li className="checkbox">  {/* <!-- 체크 박스를 위한 빈 공간-->*/} </li>
                            <li className="movie_id">영화 ID</li>
                            <li className="movie_title">영화 이름</li>
                            <li className="movie_genre">영화 장르</li>
                            <li className="movie_director">영화 감독</li>
                            <li className="movie_time">영화 시간</li>
                        </ul>
                    </div>
                    <div>
                        {/* <!-- 영화 리스트 --> */}
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">111111</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">123456789</li>
                            <li className="movie_title">123456789012345678901234567890</li>
                            <li className="movie_genre">판타지, sf, 스릴러</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">3333333</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">4444444</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">555555</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">6666666</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">77777777</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">8888888</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list ">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">9999999</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>
                        <ul className="list end">
                            <li className="checkbox"><input type="checkbox" name="" id="" /></li>
                            <li className="movie_id">11100111</li>
                            <li className="movie_title">반지의 제왕</li>
                            <li className="movie_genre">판타지</li>
                            <li className="movie_director">피터 잭슨</li>
                            <li className="movie_time">120분</li>
                        </ul>

                    </div>
                </div>

                {/* <!-- ======================== 리스트 페이지 ===================== --> */}
                <div className="list_number">
                    <ul className="list_number_ul">
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
                <div className="admmin_movie_search_div">
                    <div className="movie_search_form">
                        <form action="">
                            {/* <!-- 영화 검색 --> */}
                            <input type="text" name="" id="" placeholder="영화 검색" />
                            <input type="submit" name="" id="" value="검색" />
                        </form>

                    </div>
                    <div className="movie_edit_btn">
                        {/* <!-- 영화 추가/삭제 버튼 --> */}
                        <button className="add_movie" onclick="location.href='admin_movie_upload.html' ">영화 추가</button>
                        <button className="delete_movie">영화 삭제</button>
                    </div>

                </div>
            </div>





        </>

    );

}










export default AdminMovieListPage;