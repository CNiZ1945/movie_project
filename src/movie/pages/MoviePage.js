import React from 'react';


import '../../common/css/MoviePage.css';

function MoviePage() {









    return (
        <>
            <div class="movie">
                <img src="img/the_ring_poster.webp" alt="" class="movie_bg" />
                <div class="movie_explain">
                    {/* <!-- 영화 상세 설명 --> */}

                    <div class="book_mark">
                        <button>&#10084;</button>
                    </div>
                    <div class="explain">

                        <div class="title">
                            <ul>
                                <li class="movie_title">영화 제목: 반지의 제왕</li>
                                <li class="movie_genre">영화 장르: 판타지</li>
                                <li class="movie_director">영화 감독: 피터 잭슨</li>
                                <li class="movie_actor">영화 배우: 배우 1, 배우 2, 배우 3, 배우 4, 배우 5</li>
                                <li class="movie_time">영화 시간: 120분</li>
                                <li class="movie_year">개봉 년도: 2001년</li>
                                <li class="movie_content">영화 내용: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ea, iusto eligendi earum amet incidunt vitae odit enim assumenda sit, nesciunt est nam ut neque? Hic, similique eaque? Deserunt, harum.</li>
                                <li class="movie_age">연령 제한: 12세 이상 관람가</li>
                            </ul>
                        </div>
                        {/* <!-- 탭 목차 영역 --> */}
                        <div class="tab">

                            <div class="tab_menu">
                                <ul class="tab-menu-ul">
                                    <li><a href="#review_div">리뷰</a></li>
                                    <li><a href="#preview_div">예고편</a></li>
                                </ul>
                            </div>
                            {/* <!-- 탭 내용 영역 --> */}
                            <div class="tab-content">
                                <div id="still_cut_div">
                                    {/* <!-- 스틸컷 --> */}
                                    <ul class="still_cut">
                                        <li><img src="img/dune.jpg" alt="" /></li>
                                        <li><img src="img/half-life-3-pc-game-cover.jpg" alt="" /></li>
                                        <li><img src="img/harry.webp" alt="" /></li>
                                    </ul>
                                </div>
                                <div id="review_div">
                                    {/* <!-- 리뷰 --> */}
                                    <ul class="review_ul my_review">
                                        <li class="review_writer">본인</li>
                                        <li class="review_content">여기는 자기 리뷰로 고정</li>
                                        <li class="review_time">24-06-18</li>
                                        <li class="review_star">4.5/5</li>
                                        <li class="review_delete"><i class="fa-solid fa-bars"></i></li>
                                    </ul>
                                    <ul class="review_ul">
                                        <li class="review_writer">jj</li>
                                        <li class="review_content">Best of all continuous movies. I love it.</li>
                                        <li class="review_time">24-06-18</li>
                                        <li class="review_star">4.5/5</li>
                                        <li class="review_delete"></li>

                                    </ul>
                                    <ul class="review_ul">
                                        <li class="review_writer">jmoda</li>
                                        <li class="review_content">I already tried that one, and didn't work that much.</li>
                                        <li class="review_time">24-06-18</li>
                                        <li class="review_star">5/5</li>
                                        <li class="review_delete"></li>

                                    </ul>
                                    <ul class="review_ul">
                                        <li class="review_writer">difs</li>
                                        <li class="review_content">The complete Middle-Earth Saga:</li>
                                        <li class="review_time">24-06-18</li>
                                        <li class="review_star">4/5</li>
                                        <li class="review_delete"></li>

                                    </ul>
                                    <ul class="review_ul">
                                        <li class="review_writer">jj</li>
                                        <li class="review_content">this movie is sick put that crazy ugly little guy creeps me out then i start laughing at its face</li>
                                        <li class="review_time">24-06-18</li>
                                        <li class="review_star">1/5</li>
                                        <li class="review_delete"></li>

                                    </ul>
                                    {/* <!-- 리뷰 페이지 번호 창 --> */}
                                    <div class="review_no">
                                        <ul class="review_no_ul">
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
                                <div id="preview_div">
                                    <iframe width="400" height="200" src="https://www.youtube.com/embed/_bo1XFtQbMs?si=lWfv8lVyn-OtKmty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg">
                    {/* <!-- 배경을 위한 빈 공간 --> */}
                </div>
                {/* <!-- 영화 재생 버튼 --> */}
                <div class="button">
                    <button class="watch_movie_btn">영화 보러 가기</button>

                </div>
            </div>
        </>






    );

}






export default MoviePage;